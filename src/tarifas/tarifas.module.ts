import { Module } from '@nestjs/common';
import { TarifaService } from './tarifas.service';
import { TarifaController } from './tarifas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarifa } from './entities/tarifa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarifa])],
  controllers: [TarifaController],
  providers: [TarifaService],
  exports: [TypeOrmModule]
})
export class TarifaModule {}
