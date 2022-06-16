import { BaseService } from './base.service';
import { Injectable } from '@nestjs/common';
import { ServiceA } from './servicea';

@Injectable()
export class ServiceB extends BaseService{
  getHello(): string {
    return this.doSomeFuncFromA();
  }
}
