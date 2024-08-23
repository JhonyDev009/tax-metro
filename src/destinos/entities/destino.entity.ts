import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tarifa } from 'src/tarifas/entities/tarifa.entity';
import { Viaje } from 'src/viajes/entities/viaje.entity';

@Entity()
export class Destino {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Tarifa, (tarifa) => tarifa.origenDestino)
  tarifasComoOrigen: Tarifa[];

  @OneToMany(() => Tarifa, (tarifa) => tarifa.destinoDestino)
  tarifasComoDestino: Tarifa[];

  @OneToMany(() => Viaje, (viaje) => viaje.origen)
  viajesComoOrigen: Viaje[];

  @OneToMany(() => Viaje, (viaje) => viaje.destino)
  viajesComoDestino: Viaje[];
}

