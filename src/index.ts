import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { PORT } from './config/constants';
import { userRouter, messageRouter, addressRouter } from './routes';
import mongoose from 'mongoose';

dotenv.config();
const MONGO_DB_URI = process.env.MONGO_DB_URI || '';
mongoose.connect(
  MONGO_DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.error(`Problem connecting to MongoDB : ${err}`);
    } else {
      console.log('Connection to MongoDB established succesfully');
    }
  },
);
const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/message', messageRouter);
app.use('/address', addressRouter)

app.listen(PORT, () => {
  console.log(`App started at port : ${PORT}`);
});
