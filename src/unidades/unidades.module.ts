import { Module } from '@nestjs/common';
import { UnidadService } from './unidades.service';
import { UnidadController } from './unidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unidad } from './entities/unidade.entity';
import { UsuarioModule } from 'src/usuarios/usuarios.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Unidad]),
    UsuarioModule,  
  ],
  controllers: [UnidadController],
  providers: [UnidadService],
  exports: [TypeOrmModule],
})
export class UnidadModule {}

