import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CoreModule } from '../libs/CoreModule';

@Module({
  imports: [CoreModule],
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: 'Cat',
      useClass: CatsService,
    },
  ],
})
export class CatsModule {}
