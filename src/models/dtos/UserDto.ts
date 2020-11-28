import { IAddress } from "../Address.model";
import { Gender } from "../enums/Gender";

export default interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    address: IAddress
}