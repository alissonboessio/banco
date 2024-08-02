import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Banco API')
    .setDescription('API criada para curso de extensão nestJS - UCS')
    .setVersion('1.0')
    .addTag('bancoUCS-nestJS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {  
      docExpansion: 'list',            
    }});

  await app.listen(3000);
}
bootstrap();
