import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  hello(): string {
    return 'Hello the Common service';
  }
}
