import Address, { IAddress } from "../models/Address.model";

export default class AddressRepository {
    getAll(): Promise<IAddress[]> {
        return new Promise<IAddress[]>(async (resolve, reject) => {
            try{
                const resultDocument: IAddress[] = await Address.find().exec();
                resolve(resultDocument);
            }catch(e) {
                reject(e);
            }
        });
    }

}