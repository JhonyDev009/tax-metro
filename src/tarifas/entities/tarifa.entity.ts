import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Destino } from 'src/destinos/entities/destino.entity'; // Ajusta la ruta según sea necesario
import { Viaje } from 'src/viajes/entities/viaje.entity'; // Ajusta la ruta según sea necesario
import { Tipo } from './tipo.enum'; // Ajusta la ruta según sea necesario

@Entity()
export class Tarifa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origenId: number;

  @Column()
  destinoId: number;

  @Column('float')
  monto: number;

  @Column({
    type: 'enum',
    enum: Tipo,
  })
  tipo: Tipo;

  @ManyToOne(() => Destino, (destino) => destino.tarifasComoOrigen)
  origenDestino: Destino;

  @ManyToOne(() => Destino, (destino) => destino.tarifasComoDestino)
  destinoDestino: Destino;

  @OneToMany(() => Viaje, (viaje) => viaje.monto)
  viajes: Viaje[];
}


