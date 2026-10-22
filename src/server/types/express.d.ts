declare global {
  namespace Express {
    interface Request {
      blogPosts?: any[];
      pageTitle?: string;
    }
  }
}

export {};
