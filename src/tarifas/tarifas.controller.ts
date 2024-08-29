// tarifa.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarifaService } from './tarifas.service';
import { CreateTarifaDto } from './dto/create-tarifa.dto';
import { UpdateTarifaDto } from './dto/update-tarifa.dto';
import { Tarifa } from './entities/tarifa.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('tarifas') // Define el tag para agrupar en la documentación de Swagger
@Controller('tarifas')
export class TarifaController {
  constructor(private readonly tarifaService: TarifaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva tarifa' })
  @ApiResponse({ status: 201, description: 'Tarifa creada con éxito.', type: Tarifa })
  @ApiBody({ type: CreateTarifaDto }) // Define el cuerpo de la solicitud para Swagger
  create(@Body() createTarifaDto: CreateTarifaDto): Promise<Tarifa> {
    return this.tarifaService.create(createTarifaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las tarifas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las tarifas.', type: [Tarifa] })
  findAll(): Promise<Tarifa[]> {
    return this.tarifaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarifa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la tarifa' })
  @ApiResponse({ status: 200, description: 'Tarifa encontrada.', type: Tarifa })
  @ApiResponse({ status: 404, description: 'Tarifa no encontrada.' })
  findOne(@Param('id') id: string): Promise<Tarifa> {
    return this.tarifaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una tarifa existente' })
  @ApiParam({ name: 'id', description: 'ID de la tarifa' })
  @ApiResponse({ status: 200, description: 'Tarifa actualizada con éxito.', type: Tarifa })
  @ApiResponse({ status: 404, description: 'Tarifa no encontrada.' })
  update(
    @Param('id') id: string,
    @Body() updateTarifaDto: UpdateTarifaDto,
  ): Promise<Tarifa> {
    return this.tarifaService.update(+id, updateTarifaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una tarifa' })
  @ApiParam({ name: 'id', description: 'ID de la tarifa' })
  @ApiResponse({ status: 200, description: 'Tarifa eliminada con éxito.' })
  @ApiResponse({ status: 404, description: 'Tarifa no encontrada.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.tarifaService.remove(+id);
  }
}
