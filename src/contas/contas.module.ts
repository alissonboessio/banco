import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';

@Module({
  controllers: [ContasController],
  providers: [ContasService],
  exports: [ContasModule]
})
export class ContasModule {}
