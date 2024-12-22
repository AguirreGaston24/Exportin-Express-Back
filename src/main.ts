import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS para permitir credenciales
  app.enableCors({
    origin: 'https://exportingexperts.pro',  // Permite solo tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],  // Cabeceras permitidas
    credentials: true,  // Permite el uso de credenciales (cookies, autorización)
  });

  await app.listen(3000);
}
bootstrap();
