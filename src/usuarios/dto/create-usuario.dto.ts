import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Rol } from '../entities/rol.enum'; 
export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsEnum(Rol)
  rol: Rol;
}
