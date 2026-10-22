declare global {
  namespace Express {
    interface Request {
      pageTitle?: string;
    }
  }
}

export {};
