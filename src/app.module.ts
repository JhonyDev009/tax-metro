import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinoModule } from './destinos/destinos.module';
import { UsuarioModule } from './usuarios/usuarios.module';
import { TarifaModule } from './tarifas/tarifas.module';
import { UnidadModule } from './unidades/unidades.module';
import { ViajeModule } from './viajes/viajes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'taxi',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DestinoModule,
    UsuarioModule,
    TarifaModule,
    UnidadModule,
    ViajeModule,
  ],
})
export class AppModule {}
