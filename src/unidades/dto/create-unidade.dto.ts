// create-unidad.dto.ts
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Status } from '../entities/status.enum';

export class CreateUnidadDto {
  @ApiProperty({
    description: 'Nombre de la unidad',
    example: 'Unidad 101',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({
    description: 'ID del chofer asignado a la unidad (opcional)',
    example: 1,
    required: false,
  })
  @IsNotEmpty()
  @IsNumber()
  choferId?: number;

  @ApiProperty({
    description: 'Estado actual de la unidad',
    example: Status.DESHABILITADO, // Cambiar según el valor del enum
    enum: Status,
  })
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @ApiProperty({
    description: 'Indica si la jornada está activa',
    example: true,
  })
  @IsBoolean()
  jornadaActiva: boolean;
}
