import UserDto from '../models/dtos/UserDto';
import User, { IUserDocument } from '../models/User';

class UserRepository {
  public getAll(): Promise<UserDto[]> {
    return new Promise(async (resolve, reject) => {
      try{
        const data: IUserDocument[] = await User.find().exec();
        const users: UserDto[] = data.map((doc: IUserDocument) => {
          return {
            id: doc._id,
            firstName: doc.firstName,
            lastName: doc.lastName,
            age: doc.age,
            gender: doc.gender
          }
        });
        resolve(users);
      }catch(e) {
        reject(e);
      }
    });
  }

  // public save(user: User): User | null {
  //   return null;
  // }

  public delete(id: string): void {}
}

export const userRepository = new UserRepository();
