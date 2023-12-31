import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors({
  //   origin: true,
  //   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
  //   credentials: true,
  // });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('/api');
  await app.listen(8080);
}
bootstrap();
