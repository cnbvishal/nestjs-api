import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { userService } from "./user.service";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { userSchema } from "./user.model";
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: userSchema }]),JwtModule.register({
    secret: 'secret'
  
  }),],
  controllers: [userController],
  providers: [userService]
})

export class UserModule{

}