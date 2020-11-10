import express, { Request, Response } from 'express';
import { Gender } from '../../models/enums/Gender';
import User from '../../models/User';

export const userRouter = express.Router({
  strict: true,
});

const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    gender: Gender.MALE,
  },
];

const count = ((initialVal: number) => {
  let count = initialVal;
  return (): number => ++count;
})(1);

userRouter.get('/', (req: Request, res: Response) => {
  res.json(users);
});

userRouter.post('/', (req: Request, res: Response) => {
  const newUser: User = { ...req.body };
  newUser.id = count();
  users.push(newUser);
  res.json(newUser);
});

userRouter.delete('/:id', (req: Request, res: Response) => {
  const deleteIndex = users.findIndex(
    (user: User) => user.id === parseInt(req.params.id),
  );
  if (deleteIndex > -1) {
    users.splice(deleteIndex, 1);
    res.send('Deleted Successfully');
  } else {
    res.send('Invalid Id to delete');
  }
});
