import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Viaje } from './entities/viaje.entity';
import { Tarifa } from 'src/tarifas/entities/tarifa.entity';
import { Unidad } from 'src/unidades/entities/unidade.entity';
import { Status } from 'src/unidades/entities/status.enum';

@Injectable()
export class ViajeService {
  constructor(
    @InjectRepository(Tarifa)
    private readonly tarifaRepository: Repository<Tarifa>,
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,
    @InjectRepository(Unidad)
    private readonly unidadRepository: Repository<Unidad>,
  ) {}

  /**
   * Crea un nuevo viaje.
   * @param createViajeDto Datos del viaje a crear.
   * @returns El viaje creado.
   */
  async create(createViajeDto: CreateViajeDto): Promise<Viaje> {
    const viaje = this.viajeRepository.create(createViajeDto);
    return this.viajeRepository.save(viaje);
  }

  /**
   * Encuentra todos los viajes.
   * @returns Lista de viajes.
   */
  async findAll(): Promise<Viaje[]> {
    return this.viajeRepository.find({
      relations: ['tarifa', 'tarifa.origen', 'tarifa.destino', 'unidad', 'unidad.chofer'],
    });
  }

  /**
   * Encuentra un viaje por su ID.
   * @param id ID del viaje.
   * @returns El viaje encontrado.
   * @throws NotFoundException si el viaje no se encuentra.
   */
  async findOne(id: number): Promise<Viaje> {
    const viaje = await this.viajeRepository.findOne({
      where: { id },
      relations: ['tarifa', 'tarifa.origen', 'tarifa.destino', 'unidad', 'unidad.chofer'],
    });
    if (!viaje) {
      throw new NotFoundException(`Viaje con id ${id} no encontrado`);
    }
    return viaje;
  }

  /**
   * Actualiza un viaje existente.
   * @param id ID del viaje.
   * @param updateViajeDto Datos a actualizar.
   * @returns El viaje actualizado.
   */
  async update(id: number, updateViajeDto: UpdateViajeDto): Promise<Viaje> {
    await this.findOne(id);
    await this.viajeRepository.update(id, updateViajeDto);
    return this.findOne(id);
  }

  /**
   * Elimina un viaje.
   * @param id ID del viaje a eliminar.
   */
  async remove(id: number): Promise<void> {
    const viaje = await this.findOne(id);
    await this.viajeRepository.remove(viaje);
  }

  /**
   * Inicia un nuevo viaje.
   * @param createViajeDto Datos del viaje a iniciar.
   * @returns El viaje creado.
   * @throws NotFoundException si la tarifa no se encuentra.
   */
  async iniciarViaje(createViajeDto: CreateViajeDto): Promise<Viaje> {
    const tarifa = await this.tarifaRepository.findOne({ where: { id: createViajeDto.tarifaId } });
    if (!tarifa) {
      throw new NotFoundException('Tarifa no encontrada');
    }
    const viaje = this.viajeRepository.create({
      ...createViajeDto,
      finalizado: false,
      cobrado: 0,
    });
    return this.viajeRepository.save(viaje);
  }

  /**
   * Finaliza un viaje.
   * @param id ID del viaje a finalizar.
   * @returns El viaje finalizado.
   * @throws NotFoundException si el viaje no se encuentra o ya está finalizado.
   */
  async finalizarViaje(id: number): Promise<Viaje> {
    const viaje = await this.viajeRepository.findOne({
      where: { id, finalizado: false },
      relations: ['tarifa'],
    });
    if (!viaje) {
      throw new NotFoundException(`Viaje con id ${id} no encontrado o ya finalizado`);
    }
    viaje.cobrado = viaje.tarifa.monto;
    viaje.finalizado = true;
    return this.viajeRepository.save(viaje);
  }

  /**
   * Obtiene los viajes cobrados por una unidad específica.
   * @param unidadId ID de la unidad.
   * @returns Reporte con los viajes y el monto total cobrado.
   */
  async obtenerViajesCobradosPorUnidad(unidadId: number) {
    const viajes = await this.viajeRepository.find({
      where: {
        unidadId,
        finalizado: true,
      },
      relations: ['tarifa'],
    });
    const montoTotal = viajes.reduce((acc, viaje) => acc + (viaje.cobrado || 0), 0);
    return {
      unidadId,
      viajes,
      montoTotal,
    };
  }

  /**
   * Obtiene el reporte de cobros por unidades activas.
   * @returns Reporte con las unidades activas y el monto total cobrado por cada una.
   */
  async obtenerReporteCobrosUnidadesActivas() {
    const unidadesHabilitadas = await this.unidadRepository.find({
      where: { status: Status.HABILITADO },
      relations: ['viajes'],
    });
    const reporte = unidadesHabilitadas.map((unidad) => {
      const montoTotal = unidad.viajes
        .filter((viaje) => viaje.finalizado)
        .reduce((total, viaje) => total + (viaje.cobrado || 0), 0);
      return {
        unidadId: unidad.id,
        nombre: unidad.nombre,
        montoTotal,
      };
    });
    return reporte;
  }
}
