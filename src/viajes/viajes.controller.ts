import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';

@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) {}

  @Post()
  create(@Body() createViajeDto: CreateViajeDto) {
    return this.viajesService.create(createViajeDto);
  }

  @Get()
  findAll() {
    return this.viajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viajesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viajesService.remove(+id);
  }
}
