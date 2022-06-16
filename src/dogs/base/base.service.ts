import { ServiceA } from './servicea';
import { Inject } from '@nestjs/common';

export class BaseService {
  @Inject(ServiceA) private readonly serviceA: ServiceA;
  getHello(): string {
    return 'Hello World';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}
