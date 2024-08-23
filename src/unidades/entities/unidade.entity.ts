import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity'; // Ajusta la ruta según sea necesario
import { Viaje } from 'src/viajes/entities/viaje.entity'; // Ajusta la ruta según sea necesario

@Entity()
export class Unidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.unidades)
  chofer: Usuario;

  @OneToMany(() => Viaje, (viaje) => viaje.unidad)
  viajes: Viaje[];
}

