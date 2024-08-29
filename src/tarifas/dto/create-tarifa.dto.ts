// create-tarifa.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Tipo } from '../entities/tipo.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTarifaDto {
  @ApiProperty({
    description: 'ID del origen de la tarifa',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  origenId: number;

  @ApiProperty({
    description: 'ID del destino de la tarifa',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  destinoId: number;

  @ApiProperty({
    description: 'Monto de la tarifa, debe ser un número positivo',
    example: 150.5,
  })
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  monto: number;

  @ApiProperty({
    description: 'Tipo de tarifa, puede ser fijo o variable',
    enum: Tipo,
  })
  @IsNotEmpty()
  @IsEnum(Tipo)
  tipo: Tipo;
}

