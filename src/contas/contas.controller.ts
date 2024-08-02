import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  create(@Body() conta: CreateContaDto) {
    return this.contasService.create(conta);
  }

  @Get()
  findAll() {
    return this.contasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() conta: UpdateContaDto) {
    return this.contasService.update(id, conta);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.contasService.remove(id);
  }
}