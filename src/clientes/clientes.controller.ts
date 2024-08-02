import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ClientesService } from './clientes.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() cliente: CreateClienteDto) {
    return this.clientesService.create(cliente);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':cpf')
  findOne(@Param('cpf') cpf: string) {
    return this.clientesService.findOne(cpf);
  }

  @Put(':cpf')
  update(@Param('cpf') cpf: string, @Body() cliente: UpdateClienteDto) {
    return this.clientesService.update(cpf, cliente);
  }

  @Delete(':cpf')
  remove(@Param('cpf') cpf: string) {
    return this.clientesService.remove(cpf);
  }
}
