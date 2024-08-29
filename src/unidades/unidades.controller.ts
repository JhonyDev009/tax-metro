// unidad.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadService } from './unidades.service';
import { CreateUnidadDto } from './dto/create-unidade.dto';
import { UpdateUnidadDto } from './dto/update-unidade.dto';
import { Unidad } from './entities/unidade.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('unidades') // Define el tag para agrupar en la documentación de Swagger
@Controller('unidades')
export class UnidadController {
  constructor(private readonly unidadService: UnidadService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva unidad' })
  @ApiResponse({ status: 201, description: 'Unidad creada con éxito.', type: Unidad })
  @ApiBody({ type: CreateUnidadDto }) // Define el cuerpo de la solicitud para Swagger
  create(@Body() createUnidadDto: CreateUnidadDto): Promise<Unidad> {
    return this.unidadService.create(createUnidadDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las unidades' })
  @ApiResponse({ status: 200, description: 'Lista de todas las unidades.', type: [Unidad] })
  findAll(): Promise<Unidad[]> {
    return this.unidadService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una unidad por ID' })
  @ApiParam({ name: 'id', description: 'ID de la unidad' })
  @ApiResponse({ status: 200, description: 'Unidad encontrada.', type: Unidad })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  findOne(@Param('id') id: string): Promise<Unidad> {
    return this.unidadService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una unidad existente' })
  @ApiParam({ name: 'id', description: 'ID de la unidad' })
  @ApiResponse({ status: 200, description: 'Unidad actualizada con éxito.', type: Unidad })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  update(
    @Param('id') id: string,
    @Body() updateUnidadDto: UpdateUnidadDto,
  ): Promise<Unidad> {
    return this.unidadService.update(+id, updateUnidadDto);
  }

  @Patch(':id/habilitar')
  @ApiOperation({ summary: 'Habilitar una unidad asignando un chofer' })
  @ApiParam({ name: 'id', description: 'ID de la unidad' })
  @ApiBody({ description: 'ID del chofer a asignar', schema: { type: 'number', example: 2 } })
  @ApiResponse({ status: 200, description: 'Unidad habilitada con éxito.', type: Unidad })
  @ApiResponse({ status: 404, description: 'Unidad o chofer no encontrado.' })
  async habilitarUnidad(
    @Param('id') id: string,
    @Body('choferId') choferId: number,
  ) {
    return this.unidadService.habilitarUnidad(+id, choferId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una unidad' })
  @ApiParam({ name: 'id', description: 'ID de la unidad' })
  @ApiResponse({ status: 200, description: 'Unidad eliminada con éxito.' })
  @ApiResponse({ status: 404, description: 'Unidad no encontrada.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.unidadService.remove(+id);
  }
}

