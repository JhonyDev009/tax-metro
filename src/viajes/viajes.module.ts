import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { Viaje } from './entities/viaje.entity';
import { Unidad } from 'src/unidades/entities/unidade.entity';
import { Tarifa } from 'src/tarifas/entities/tarifa.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Viaje, Unidad, Tarifa, Usuario])],
  providers: [ViajesService],
  controllers: [ViajesController],
})
export class ViajesModule {}
