import { IsNumber, IsString } from 'class-validator';

export class CreateViajeDto {
  @IsNumber()
  origenId: number;

  @IsNumber()
  destinoId: number;

  @IsNumber()
  montoId: number;

  @IsNumber()
  unidadId: number;

  @IsNumber()
  choferId: number;
}
