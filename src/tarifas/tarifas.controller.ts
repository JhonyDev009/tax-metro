import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TarifaService } from './tarifas.service';
import { CreateTarifaDto } from './dto/create-tarifa.dto';
import { UpdateTarifaDto } from './dto/update-tarifa.dto';
import { Tarifa } from './entities/tarifa.entity';

@Controller('tarifas')
export class TarifaController {
  constructor(private readonly tarifaService: TarifaService) {}

  @Post()
  create(@Body() createTarifaDto: CreateTarifaDto): Promise<Tarifa> {
    return this.tarifaService.create(createTarifaDto);
  }

  @Get()
  findAll(): Promise<Tarifa[]> {
    return this.tarifaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Tarifa> {
    return this.tarifaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTarifaDto: UpdateTarifaDto,
  ): Promise<Tarifa> {
    return this.tarifaService.update(+id, updateTarifaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tarifaService.remove(+id);
  }
}
