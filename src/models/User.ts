import { Gender } from './enums/Gender';

export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
}
