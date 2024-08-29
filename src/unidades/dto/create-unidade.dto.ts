import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Status } from '../entities/status.enum';

export class CreateUnidadDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsNumber()
  choferId?: number;

  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;

  @IsBoolean()
  jornadaActiva: boolean;
}

