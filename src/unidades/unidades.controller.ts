import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadService } from './unidades.service';
import { CreateUnidadDto } from './dto/create-unidade.dto';
import { UpdateUnidadDto } from './dto/update-unidade.dto';
import { Unidad } from './entities/unidade.entity';

@Controller('unidades')
export class UnidadController {
  constructor(private readonly unidadService: UnidadService) {}

  @Post()
  create(@Body() createUnidadDto: CreateUnidadDto): Promise<Unidad> {
    return this.unidadService.create(createUnidadDto);
  }

  @Get()
  findAll(): Promise<Unidad[]> {
    return this.unidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Unidad> {
    return this.unidadService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnidadDto: UpdateUnidadDto,
  ): Promise<Unidad> {
    return this.unidadService.update(+id, updateUnidadDto);
  }

  @Patch(':id/habilitar')
  async habilitarUnidad(
    @Param('id') id: string,
    @Body('choferId') choferId: number,
  ) {
    return this.unidadService.habilitarUnidad(+id, choferId);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.unidadService.remove(+id);
  }
}
