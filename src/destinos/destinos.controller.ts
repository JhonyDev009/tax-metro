import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DestinoService } from './destinos.service';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('destinos') // Define el tag para agrupar en la documentación
@Controller('destinos')
export class DestinoController {
  constructor(private readonly destinoService: DestinoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo destino' })
  @ApiResponse({ status: 201, description: 'Destino creado con éxito.' })
  @ApiBody({ type: CreateDestinoDto }) // Documenta el cuerpo de la solicitud
  create(@Body() createDestinoDto: CreateDestinoDto) {
    return this.destinoService.create(createDestinoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los destinos' })
  @ApiResponse({ status: 200, description: 'Lista de destinos.' })
  findAll() {
    return this.destinoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un destino por ID' })
  @ApiParam({ name: 'id', description: 'ID del destino' }) // Documenta el parámetro
  @ApiResponse({ status: 200, description: 'Destino encontrado.' })
  @ApiResponse({ status: 404, description: 'Destino no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.destinoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un destino existente' })
  @ApiParam({ name: 'id', description: 'ID del destino' })
  @ApiResponse({ status: 200, description: 'Destino actualizado con éxito.' })
  @ApiResponse({ status: 404, description: 'Destino no encontrado.' })
  update(@Param('id') id: string, @Body() updateDestinoDto: UpdateDestinoDto) {
    return this.destinoService.update(+id, updateDestinoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un destino' })
  @ApiParam({ name: 'id', description: 'ID del destino' })
  @ApiResponse({ status: 200, description: 'Destino eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Destino no encontrado.' })
  remove(@Param('id') id: string) {
    return this.destinoService.remove(+id);
  }
}


