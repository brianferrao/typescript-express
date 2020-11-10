import express, { Request, Response, NextFunction } from 'express';

export const messageRouter = express.Router({ strict: true });

messageRouter.get('/', (req: Request, res: Response) => {
  res.send('Hello Message');
});
