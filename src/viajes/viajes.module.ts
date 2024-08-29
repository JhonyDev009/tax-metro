import { Module } from '@nestjs/common';
import { ViajeService } from './viajes.service';
import { ViajeController } from './viajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { TarifaModule } from 'src/tarifas/tarifas.module';
import { Tarifa } from 'src/tarifas/entities/tarifa.entity';
import { Unidad } from 'src/unidades/entities/unidade.entity';
import { UnidadModule } from 'src/unidades/unidades.module';

@Module({
  imports: [TypeOrmModule.forFeature([Viaje, Tarifa, Unidad]),
  TarifaModule,
  UnidadModule,
],
  controllers: [ViajeController],
  providers: [ViajeService],
  
})
export class ViajeModule {}
