import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
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
