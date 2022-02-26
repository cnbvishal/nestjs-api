import { Injectable } from "@nestjs/common";
import { car } from "./car.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class carsService{
  cars: car[]=[];

    constructor(@InjectModel('Car') private readonly CarModel: Model<car>){

    }

  //insert car data
  async insertCar(name: string,model: number, seater:number, desc: string, price: number){
    const newCar=new this.CarModel({name: name, model: model, seater: seater, description: desc, price: price})
    const result = await newCar.save();
    return result;
  }

  //get all cars
  async getCars(){
    const cars =await this.CarModel.find().exec();
    return cars.map((car)=> ({id: car.id, name: car.name, model: car.model, seater: car.seater, description: car.description, price: car.price}))
  }

  //get car by id
  async getCarbyId(carId: string){
    const car= await this.findCar(carId)
    return {id: car.id, name: car.name, model: car.model, seater: car.seater, description: car.description, price:car.price}
  }

  //delete car by id
  async deleteCar(carId: string){
    const result = await this.CarModel.deleteOne({_id: carId}).exec();
    if(result.deletedCount === 0){
      return new Error();
    }
    return result;
  }
   

  async CarByName(carName: any){
    const user =await this.CarModel.findOne({carName});
    return user;
  }

  //update car by id
  async updateCar(carId: string, name: string, model: number, seater: number, desc: string, price: number) {
    const updatedcar = await this.findCar(carId)
    if (name) {
      updatedcar.name = name;
    }
    if (model) {
      updatedcar.model = model;
    }
    if (seater) {
      updatedcar.seater = seater;
    }
    if (desc) {
      updatedcar.description = desc;
    }
    if (price) {
      updatedcar.price = price;
    }
    updatedcar.save();
   
  }

  //commom method to find the car 
  private async findCar(id: string): Promise<car> {
    const car = await this.CarModel.findById(id).exec();
    if(!car){
      throw new Error();
    }
    return car;
  }

}