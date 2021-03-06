import express, { Request, Response } from 'express';
import User from '../../models/User';
import { userRepository } from '../../repository';

export const userRouter = express.Router({
  strict: true,
});

userRouter.get('/', async (req: Request, res: Response) => {
  try{
    res.json(await userRepository.getAll());
  }catch(e) {
    res.sendStatus(500);
  }
});

userRouter.get('/:id', (req: Request, res: Response) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

userRouter.post('/', async (req: Request, res: Response) => {
  try{
    res.json(await userRepository.save(req.body));
  }catch(e) {
    res.status(500).send(e.message);
    res.end();
  }
});

userRouter.patch('/:id', (req: Request, res: Response) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
    if (err) {
      console.error(`Error Occured: ${err}`);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

userRouter.delete('/:id', (req: Request, res: Response) => {
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.error(`Error Occured: ${err}`);
      res.sendStatus(500);
    } else {
      if (data) {
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    }
  });
});
