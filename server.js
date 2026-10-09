/* eslint-disable no-console */
import express from 'express';
import fs from 'node:fs/promises';
import http from 'node:http';
import https from 'node:https';
import os from 'node:os';
import path from 'node:path';

const DEVELOPMENT = process.env.NODE_ENV === 'development';
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

const templateHtml = DEVELOPMENT
  ? ''
  : await fs.readFile(path.join(import.meta.dirname, '/dist/client/index.html'), 'utf-8');

const app = express();

/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (DEVELOPMENT) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
  app.use('*all', async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule('/src/entry-server.tsx');
      return await source.app(req, res, next);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.log(e.stack);
      next(error);
    }
  });
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv(path.join(import.meta.dirname, '/dist/client'), { extensions: [] }));
  app.use(await import('./dist/server/entry-server.js').then((mod) => mod.app));
}

const server = DEVELOPMENT || !credentials
  ? http.createServer(app)
  : https.createServer(credentials, app);

server.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server started on host ${os.hostname()} on port ${port}`);
});
