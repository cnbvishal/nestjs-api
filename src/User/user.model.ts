import * as mongoose from 'mongoose'; 

export const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  confirmPassword: {type: String, required: true},
})

export interface user extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;  
}