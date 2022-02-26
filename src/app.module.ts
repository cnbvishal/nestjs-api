import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './Products/cars.module';
import { UserModule } from './User/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [CarModule, UserModule, MongooseModule.forRoot('dtabase connection link here'),JwtModule.register({
    secret: 'secret',
    signOptions: { expiresIn: '1d' },
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
