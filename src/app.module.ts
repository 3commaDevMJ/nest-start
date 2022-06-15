import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Dexter, Jane } from './person/MyApp';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'Person',
      useClass: Jane,
    },
  ],
})
export class AppModule {}
