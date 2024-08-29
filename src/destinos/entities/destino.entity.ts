import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tarifa } from 'src/tarifas/entities/tarifa.entity';

@Entity()
export class Destino {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Tarifa, (tarifa) => tarifa.origen)
  tarifasComoOrigen: Tarifa[];

  @OneToMany(() => Tarifa, (tarifa) => tarifa.destino)
  tarifasComoDestino: Tarifa[];
}
