import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDestinoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
