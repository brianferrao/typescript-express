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

  public save(user: UserDto): Promise<UserDto> {
    return new Promise<UserDto>(async (resolve, reject) => {
      try {
        const savedDocument: IUserDocument = await new User(user).save();
        resolve({
          id: savedDocument._id,
          firstName: savedDocument.firstName,
          lastName: savedDocument.lastName,
          age: savedDocument.age,
          gender: savedDocument.gender
        });
      }catch(e) {
        reject(e);
      }
    });
  }

  public delete(id: string): void {}
}

export const userRepository = new UserRepository();
