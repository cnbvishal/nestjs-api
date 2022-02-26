import { Controller, Post, Body, Get, Param, Delete, Put } from "@nestjs/common";
import { carsService } from "./cars.service";


@Controller('cars')
export class carsController {

  constructor(private readonly carService: carsService) {

  }

  @Post()
  async addCar(
    @Body('name') carName: string,
    @Body('model') carModel: number,
    @Body('seater') carSeater: number,
    @Body('description') carDesc: string,
    @Body('price') carPrice: number
  ) {
    const generatedId = await this.carService.insertCar(carName, carModel, carSeater, carDesc, carPrice);
    return 'Inserted Successfully'
  }


  @Get()
  async getAllCars() {
    const result = await this.carService.getCars();
    return result;
  }

  @Get(':id')
  async getCarById(@Param('id') carId: string) {
    const result = await this.carService.getCarbyId(carId)
    return result;
  }

  

  @Delete(':id')
  async deleteCar(@Param('id') carId: string) {
    await this.carService.deleteCar(carId);
    return 'Deleted Successfully';
  }


  @Put(':id')
  async updateCar(@Param('id') carId: string, @Body('name') carName: string, @Body('model') carModel: number, @Body('seater') carSeater: number, @Body('description') carDesc: string, @Body('price') carPrice: number) {
    await this.carService.updateCar(carId, carName, carModel, carSeater, carDesc, carPrice)
    return 'Updated Successfully';
  }

  @Get(':name')
  async getCarByName(@Param('name') name: any) {
    const result = await this.carService.CarByName(name)
    return result;
  }

};