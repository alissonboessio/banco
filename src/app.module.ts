import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContasModule, MongooseModule.forRoot('mongodb+srv://aboessio:<senha>@cluster0.w8nwb2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
