import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Unidad } from 'src/unidades/entities/unidade.entity';
import { Rol } from './rol.enum';

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

  @Column({ type: 'enum', enum: Rol })
  rol: Rol;

  @OneToMany(() => Unidad, (unidad) => unidad.chofer)
  unidades: Unidad[];
}
