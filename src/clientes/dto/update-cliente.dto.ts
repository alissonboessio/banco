import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienteDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  sobrenome: string;
}