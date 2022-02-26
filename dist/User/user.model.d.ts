import * as mongoose from 'mongoose';
export declare const userSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface user extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
