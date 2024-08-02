import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Contas, ContasSchema } from './schemas/contas.schema';

@Module({
  controllers: [ContasController],
  providers: [ContasService],
  exports: [ContasModule],
  imports: [MongooseModule.forFeature([{name: Contas.name, schema: ContasSchema}])]
})
export class ContasModule {}
