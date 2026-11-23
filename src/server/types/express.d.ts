import type { ReactNode } from 'react';

declare global {
  namespace Express {
    interface Request {
      pageContent?: ReactNode;
      pageTitle?: string;
    }
  }
}

export {};
