import mongoose, {Document, Schema, Model} from 'mongoose';

export interface IAddress extends Document {
    street: string;
    unit?: string;
    city: string;
    state: string;
    zip: number;
}

export const AddressSchema = new Schema({
    street: {type: String, required: true},
    unit: {type: String},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: Number, required: true}
});

const Address: Model<IAddress, {}> = mongoose.model<IAddress>('Address', AddressSchema);

export default Address;