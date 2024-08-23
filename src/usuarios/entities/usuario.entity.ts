import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Unidad } from 'src/unidades/entities/unidade.entity'; // Ajusta la ruta según sea necesario
import { Viaje } from 'src/viajes/entities/viaje.entity'; // Ajusta la ruta según sea necesario
import { Rol } from './rol.enum'; // Ajusta la ruta según sea necesario

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Rol,
  })
  rol: Rol;

  @OneToMany(() => Unidad, (unidad) => unidad.chofer)
  unidades: Unidad[];

  @OneToMany(() => Viaje, (viaje) => viaje.chofer)
  viajes: Viaje[];
}
