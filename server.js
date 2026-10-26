/* eslint-disable no-console */
import express from 'express';
import fs from 'node:fs/promises';
import http from 'node:http';
import https from 'node:https';
import os from 'node:os';
import path from 'node:path';

process.loadEnvFile(path.join(import.meta.dirname, './.env'));

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 26675;
const base = process.env.BASE || '/';
let credentials;
try {
  const privateKey  = await fs.readFile(path.join(import.meta.dirname, '../kirstenmalin.com.key'), 'utf8');
  const certificate = await fs.readFile(path.join(import.meta.dirname, '../kirstenmalin.com.cert'), 'utf8');
  if (privateKey && certificate) {
    credentials = { key: privateKey, cert: certificate };
  }
} catch {
  console.info('No certificate or private key found. Running in http mode.');
}

const templateHtml = isProduction
  ? await fs.readFile(path.join(import.meta.dirname, '/dist/client/index.html'), 'utf-8')
  : '';

const app = express();

/** @type {import('vite').ViteDevServer | undefined} */
let vite, ukuleleRouter, blogMiddleware;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
  ukuleleRouter = (await import('./ukulele/server/router.js')).default;
  blogMiddleware = (await vite.ssrLoadModule('/src/server/blog-middleware.ts')).default;
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv(path.join(import.meta.dirname, '/dist/client'), { extensions: [] }));
  ukuleleRouter = (await import(path.join(import.meta.dirname, '/ukulele/server/router.js'))).default;
  blogMiddleware = (await import(path.join(import.meta.dirname, '/dist/server/blog-middleware.ts'))).default;
}

app.use('/projects/ukulele', ukuleleRouter);
app.use('/blog', blogMiddleware);
app.use('/projects', (req, _res, next) => {
  req.pageTitle = 'Projects | ';
  next();
});

app.use('*all', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    /** @type {string} */
    let template,
      /** @type {import('./src/entry-server.ts').render} */
      render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/server/entry-server.tsx')).render;
    } else {
      template = templateHtml;
      render = (await import(path.join(import.meta.dirname, '/dist/server/entry-server.js'))).render;
    }

    const rendered = render(url);

    const html = template
      .replace('<!--app-title-->', `${(req.pageTitle ?? '')}Kirsten Malin, Frontend Software Engineer`)
      .replace('<!--app-html-->', rendered.html ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

const server = isProduction && credentials
  ? https.createServer(credentials, app)
  : http.createServer(app);

server.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server started on host ${os.hostname()} on port ${port}`);
});
