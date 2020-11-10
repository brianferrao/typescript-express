import express, { Request, Response } from 'express';
import { PORT } from './config/constants';
import { userRouter, messageRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/message', messageRouter);

app.listen(PORT, () => {
  console.log(`App started at port : ${PORT}`);
});
