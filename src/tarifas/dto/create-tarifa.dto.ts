import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Tipo } from '../entities/tipo.enum'; 
export class CreateTarifaDto {
  @IsNumber()
  origenId: number;

  @IsNumber()
  destinoId: number;

  @IsNumber()
  monto: number;

  @IsEnum(Tipo)
  tipo: Tipo;
}
