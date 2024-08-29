import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Destino } from 'src/destinos/entities/destino.entity';
import { Viaje } from 'src/viajes/entities/viaje.entity';
import { Tipo } from './tipo.enum';

@Entity()
export class Tarifa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origenId: number;

  @Column()
  destinoId: number;

  @Column()
  monto: number;

  @Column({ type: 'enum', enum: Tipo })
  tipo: Tipo;

  @ManyToOne(() => Destino, (destino) => destino.tarifasComoOrigen)
  origen: Destino;

  @ManyToOne(() => Destino, (destino) => destino.tarifasComoDestino)
  destino: Destino;

  @OneToMany(() => Viaje, (viaje) => viaje.tarifa)
  viajes: Viaje[];
}
