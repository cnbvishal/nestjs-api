import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { userService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { NotFoundError } from 'rxjs';

@Controller('user')
export class userController {
  constructor(
    private readonly userService: userService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('password') userPassword: string,
    @Body('confirmPassword') userConfirmPassword: string,
  ) {
    const generatedId = await this.userService.insertUser(
      userName,
      userEmail,
      userPassword,
      userConfirmPassword,
    );
    return generatedId;
  }

  @Get()
  async getAllUsers() {
    const result = await this.userService.getUser();
    return result;
  }

  @Get(':email')
  async login(@Param('email') email: string) {
    let result;
    result = await this.userService.loginUser(email);
    if (result === undefined) {
      return new Error('Email not Exists');
    }
    const jwt = await this.jwtService.signAsync(result.id);
    console.log('token ', jwt);
    return result;
  }

  // @Get(':id')
  // async getCarById(@Param('id') carId: string) {
  //   const result = await this.carService.getCarbyId(carId)
  //   return result;
  // }

  // @Delete(':id')
  // async deleteCar(@Param('id') carId: string) {
  //   await this.carService.deleteCar(carId);
  //   return 'Deleted Successfully';
  // }

  // @Put(':id')
  // async updateCar(@Param('id') carId: string, @Body('name') carName: string, @Body('model') carModel: number, @Body('seater') carSeater: number, @Body('description') carDesc: string, @Body('price') carPrice: number) {
  //   await this.carService.updateCar(carId, carName, carModel, carSeater, carDesc, carPrice)
  //   return 'Updated Successfully';
  // }
}
