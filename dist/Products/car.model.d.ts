import * as mongoose from 'mongoose';
export declare const carSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export interface car extends mongoose.Document {
    id: string;
    name: string;
    model: number;
    seater: number;
    description: string;
    price: number;
}
