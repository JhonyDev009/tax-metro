import { IsNotEmpty } from 'class-validator';

export class CreateUnidadDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  choferId: number;
}
