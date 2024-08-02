import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateContaDto {
  @ApiProperty()
  titular: string;
  @ApiProperty()
  saldo: number;
  @ApiProperty()
  limite: number;
}