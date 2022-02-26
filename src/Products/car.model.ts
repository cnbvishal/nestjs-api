import * as mongoose from 'mongoose'; 

export const carSchema = new mongoose.Schema({
  name: {type: String, required: true},
  model: {type: Number, required: true},
  seater: {type: Number, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}
})

export interface car extends mongoose.Document {
    id: string;
    name: string;
    model: number;
    seater: number;
    description: string;
    price:number;  
}