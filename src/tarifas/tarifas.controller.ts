import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TarifasService } from './tarifas.service';
import { CreateTarifaDto } from './dto/create-tarifa.dto';

@Controller('tarifas')
export class TarifasController {
  constructor(private readonly tarifasService: TarifasService) {}

  @Post()
  create(@Body() createTarifaDto: CreateTarifaDto) {
    return this.tarifasService.create(createTarifaDto);
  }

  @Get()
  findAll() {
    return this.tarifasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarifasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tarifasService.remove(+id);
  }
}
