import { Module } from '@nestjs/common';
import { DestinoService } from './destinos.service';
import { DestinoController } from './destinos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destino } from './entities/destino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Destino])],
  controllers: [DestinoController],
  providers: [DestinoService],
})
export class DestinoModule {}
