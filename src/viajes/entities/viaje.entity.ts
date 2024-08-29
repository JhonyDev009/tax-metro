import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Tarifa } from 'src/tarifas/entities/tarifa.entity';
import { Unidad } from 'src/unidades/entities/unidade.entity';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tarifaId: number;

  @Column()
  unidadId: number;

  @ManyToOne(() => Tarifa, (tarifa) => tarifa.viajes)
  tarifa: Tarifa;

  @ManyToOne(() => Unidad, (unidad) => unidad.viajes)
  unidad: Unidad;

  @Column({ nullable: true })
  cobrado?: number;

  @Column({ default: false })
  finalizado: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}


