import { PartialType } from '@nestjs/mapped-types';
import { CreateUnidadDto } from './create-unidade.dto';

export class UpdateUnidadeDto extends PartialType(CreateUnidadDto) {}
