import { Gender } from "../enums/Gender";

export default interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
}