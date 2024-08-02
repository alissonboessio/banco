import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contas')
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

  @Get(':numero')
  findOne(@Param('numero') numero: number) {
    return this.contasService.findOne(numero);
  }

  @Put(':numero')
  update(@Param('numero') numero: number, @Body() conta: UpdateContaDto) {
    return this.contasService.update(numero, conta);
  }

  @Delete(':numero')
  remove(@Param('numero') numero: number) {
    return this.contasService.remove(numero);
  }
}