import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinosModule } from './destinos/destinos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TarifasModule } from './tarifas/tarifas.module';
import { UnidadesModule } from './unidades/unidades.module';
import { ViajesModule } from './viajes/viajes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'taximetro',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DestinosModule,
    UsuariosModule,
    TarifasModule,
    UnidadesModule,
    ViajesModule,
  ],
})
export class AppModule {}
