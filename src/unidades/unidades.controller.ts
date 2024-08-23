import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { CreateUnidadDto } from './dto/create-unidade.dto';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Post()
  create(@Body() createUnidadDto: CreateUnidadDto) {
    return this.unidadesService.create(createUnidadDto);
  }

  @Get()
  findAll() {
    return this.unidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadesService.remove(+id);
  }
}
