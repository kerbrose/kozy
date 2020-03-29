import mongoose, { Schema, Document } from 'mongoose';


export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
});

export default mongoose.model<IUser>('User', UserSchema);