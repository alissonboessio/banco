import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @ApiProperty()
  nome: string;
  @IsNotEmpty()
  @ApiProperty()
  sobrenome: string;
  @IsNotEmpty()
  @ApiProperty()
  cpf: string;

}