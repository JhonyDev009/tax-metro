import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateViajeDto {
  @ApiProperty({
    description: 'ID de la tarifa',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  tarifaId: number;

  @ApiProperty({
    description: 'ID de la unidad',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  unidadId: number;

  @ApiPropertyOptional({
    description: 'Monto cobrado',
    example: 100,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  cobrado?: number;

  @ApiProperty({
    description: 'Estado de finalización del viaje',
    example: false,
  })
  @IsNotEmpty()
  @IsBoolean()
  finalizado: boolean;

  @ApiPropertyOptional({
    description: 'Fecha de creación del viaje',
    example: '2024-08-28T12:00:00Z',
  })
  @IsOptional()
  @IsDate()
  createdAt: Date;
}
