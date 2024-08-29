import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ViajeService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Viaje } from './entities/viaje.entity';

@ApiTags('viajes')
@Controller('viajes')
export class ViajeController {
  constructor(private readonly viajeService: ViajeService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo viaje' })
  @ApiResponse({ status: 201, description: 'Viaje creado.', type: Viaje })
  create(@Body() createViajeDto: CreateViajeDto): Promise<Viaje> {
    return this.viajeService.create(createViajeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los viajes' })
  @ApiResponse({ status: 200, description: 'Lista de viajes.', type: [Viaje] })
  findAll(): Promise<Viaje[]> {
    return this.viajeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un viaje por ID' })
  @ApiResponse({ status: 200, description: 'Viaje encontrado.', type: Viaje })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado' })
  findOne(@Param('id') id: string): Promise<Viaje> {
    return this.viajeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un viaje' })
  @ApiResponse({ status: 200, description: 'Viaje actualizado.', type: Viaje })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado' })
  update(
    @Param('id') id: string,
    @Body() updateViajeDto: UpdateViajeDto,
  ): Promise<Viaje> {
    return this.viajeService.update(+id, updateViajeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un viaje' })
  @ApiResponse({ status: 204, description: 'Viaje eliminado.' })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado' })
  remove(@Param('id') id: string): Promise<void> {
    return this.viajeService.remove(+id);
  }

  @Post('iniciar')
  @ApiOperation({ summary: 'Iniciar un nuevo viaje' })
  @ApiResponse({ status: 201, description: 'Viaje iniciado.', type: Viaje })
  iniciarViaje(@Body() createViajeDto: CreateViajeDto) {
    return this.viajeService.iniciarViaje(createViajeDto);
  }

  @Patch(':id/finalizar')
  @ApiOperation({ summary: 'Finalizar un viaje' })
  @ApiResponse({ status: 200, description: 'Viaje finalizado.', type: Viaje })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado o ya finalizado' })
  finalizarViaje(@Param('id') id: number) {
    return this.viajeService.finalizarViaje(id);
  }

  @Get('reporte-cobros/unidad/:unidadId')
  @ApiOperation({ summary: 'Obtener reporte de viajes cobrados por unidad' })
  @ApiResponse({ status: 200, description: 'Reporte de viajes cobrados.', type: Object })
  obtenerViajesCobradosPorUnidad(@Param('unidadId') unidadId: number) {
    return this.viajeService.obtenerViajesCobradosPorUnidad(unidadId);
  }

  @Get('reporte-cobros/unidades-activas')
  @ApiOperation({ summary: 'Obtener reporte de cobros por unidades activas' })
  @ApiResponse({ status: 200, description: 'Reporte de cobros por unidades activas.', type: [Object] })
  obtenerReporteCobrosUnidadesActivas() {
    return this.viajeService.obtenerReporteCobrosUnidadesActivas();
  }
}
