import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type','text/html')
  getHello(): {name: string} {
    return {name : 'sazid'}
  }
}
