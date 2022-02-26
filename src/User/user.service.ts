import { Injectable } from "@nestjs/common";
import { user } from "./user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class userService{
  cars: user[]=[];

    constructor(@InjectModel('User') private readonly UserModel: Model<user>){

    }

  //insert user data
  async insertUser(name: string,email: string, password:string, confirmPassword: string){
    const newUser=new this.UserModel({name: name, email: email, password: password, confirmPassword: confirmPassword})
    const result = await newUser.save();
    return result;
  }

  //get all users
  async getUser(){
    const users =await this.UserModel.find().exec();
    return users.map((user)=> ({id: user.id, name: user.name, email: user.email, password: user.password, confirmPassword: user.confirmPassword}))
  }

  //get all users
  async loginUser(email){
    const user =await this.UserModel.findOne({email});
    if(user === undefined)
    return false;
    return user;
  }

}