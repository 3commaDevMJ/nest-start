import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production'
      ? './env/.production.env'
      : process.env.NODE_ENV === 'stage'
      ? './env/.stage.env'
      : './env/.development.env',
  ),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log(
    process.env.NODE_ENV === 'production'
      ? './env/.production.env'
      : process.env.NODE_ENV === 'stage'
      ? './env/.stage.env'
      : './env/.development.env',
  );
}
bootstrap();
