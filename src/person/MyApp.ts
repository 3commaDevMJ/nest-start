import { Injectable } from '@nestjs/common';

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

class MyApp {
  private person: Person;
  constructor() {
    this.person = new Dexter();
  }
}
