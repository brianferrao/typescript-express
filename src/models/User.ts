import mongoose, { Schema, Document } from 'mongoose';
import { Gender } from './enums/Gender';
import { AddressSchema, IAddress} from './Address.model';

export interface IUserDocument extends Document {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  address: IAddress;
}

export const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  age: { type: Number, required: true },
  gender: {
    type: String,
    enum: ['MALE', 'FEMALE', 'OTHERS'],
    default: 'OTHERS',
  },
  address: AddressSchema
});

const User = mongoose.model<IUserDocument>('User', UserSchema);
export default User;
