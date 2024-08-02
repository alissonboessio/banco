import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateContaDto {
  @IsNotEmpty()
  @ApiProperty()
  numero: number;
  @IsNotEmpty()
  @ApiProperty()
  titular: string;
  @IsNotEmpty()
  @ApiProperty()
  saldo: number;
  @IsNotEmpty()
  @ApiProperty()
  limite: number;
}