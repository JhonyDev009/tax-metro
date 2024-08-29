import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDestinoDto {
  @ApiProperty({
    description: 'Nombre del destino',
    example: 'Playa del Carmen',
  })
  @IsString()
  @IsNotEmpty()
  nombre: string;
}

