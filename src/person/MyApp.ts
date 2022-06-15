import { Inject, Injectable } from '@nestjs/common';

export interface Person {
  getName: () => string;
}

@Injectable()
export class Dexter implements Person {
  getName() {
    return 'Dexter';
  }
}

@Injectable()
export class Jane implements Person {
  getName() {
    return 'Jane';
  }
}

// IOC 미사용
// class MyApp {
//   private person: Person;
//   constructor() {
//     this.person = new Dexter();
//   }
// }
// IOC 사용
class MyApp {
  constructor(@Inject('Person') private p: Person) {}
}
