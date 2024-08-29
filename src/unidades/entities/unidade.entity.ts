import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Viaje } from 'src/viajes/entities/viaje.entity';
import { Status } from './status.enum';

@Entity()
export class Unidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column( {nullable : true})
  choferId?: number;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @Column({ default: false })
  jornadaActiva: boolean;

  @ManyToOne(() => Usuario, (usuario) => usuario.unidades)
  chofer: Usuario;

  @OneToMany(() => Viaje, (viaje) => viaje.unidad)
  viajes: Viaje[];
}

