import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceB } from './dogs/base/serviceb';

@Controller()
export class AppController {
  constructor(
    private readonly serviceB: ServiceB,
  ) { }

  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello()
  }
}
