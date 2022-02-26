import { Module } from "@nestjs/common";
import { carsController } from "./cars.controller";
import { carsService } from "./cars.service";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import {carSchema} from './car.model'


@Module({
  imports: [MongooseModule.forFeature([{name: 'Car', schema: carSchema }])],
  controllers: [carsController],
  providers: [carsService]
})

export class CarModule{

}