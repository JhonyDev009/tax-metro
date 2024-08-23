import { IsNotEmpty } from 'class-validator';

export class CreateDestinoDto {
  @IsNotEmpty()
  nombre: string;
}

