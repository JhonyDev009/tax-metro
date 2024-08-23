import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Destino } from 'src/destinos/entities/destino.entity'; 
import { Tarifa } from 'src/tarifas/entities/tarifa.entity'; 
import { Unidad } from 'src/unidades/entities/unidade.entity'; 
import { Usuario } from 'src/usuarios/entities/usuario.entity'; 

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  origenId: number;

  @Column()
  destinoId: number;

  @Column()
  montoId: number;

  @Column()
  unidadId: number;

  @Column()
  choferId: number;

  @ManyToOne(() => Destino, (destino) => destino.viajesComoOrigen)
  origen: Destino;

  @ManyToOne(() => Destino, (destino) => destino.viajesComoDestino)
  destino: Destino;

  @ManyToOne(() => Tarifa, (tarifa) => tarifa.viajes)
  monto: Tarifa;

  @ManyToOne(() => Unidad, (unidad) => unidad.viajes)
  unidad: Unidad;

  @ManyToOne(() => Usuario, (usuario) => usuario.viajes)
  chofer: Usuario;
}


