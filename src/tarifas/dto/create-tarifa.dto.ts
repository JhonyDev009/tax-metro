// create-tarifa.dto.ts
import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Tipo } from '../entities/tipo.enum';

export class CreateTarifaDto {
  @IsNotEmpty()
  @IsNumber()
  origenId: number;

  @IsNotEmpty()
  @IsNumber()
  destinoId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  monto: number;

  @IsNotEmpty()
  @IsEnum(Tipo)
  tipo: Tipo;
}

