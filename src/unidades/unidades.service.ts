import { Injectable, NotFoundException, BadRequestException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnidadDto } from './dto/create-unidade.dto';
import { UpdateUnidadDto } from './dto/update-unidade.dto';
import { Unidad } from './entities/unidade.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Status } from './entities/status.enum';

@Injectable()
export class UnidadService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Unidad)
    private readonly unidadRepository: Repository<Unidad>,
  ) {}

  async create(createUnidadDto: CreateUnidadDto): Promise<Unidad> {
    const unidad = this.unidadRepository.create(createUnidadDto);
    return this.unidadRepository.save(unidad);
  }

  async findAll(): Promise<Unidad[]> {
    return this.unidadRepository.find({ relations: ['chofer'] });
  }

  async findOne(id: number): Promise<Unidad> {
    const unidad = await this.unidadRepository.findOne({
      where: { id },
      relations: ['chofer'],
    });
    if (!unidad) {
      throw new NotFoundException(`Unidad con id ${id} no encontrada`);
    }
    return unidad;
  }

  async update(id: number, updateUnidadDto: UpdateUnidadDto): Promise<Unidad> {
    await this.findOne(id);
    await this.unidadRepository.update(id, updateUnidadDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const unidad = await this.findOne(id);
    await this.unidadRepository.remove(unidad);
  }


  async habilitarUnidad(unidadId: number, choferId: number): Promise<Unidad> {
    const unidad = await this.unidadRepository.findOne({ where: { id: unidadId } });
    if (!unidad) {
      throw new NotFoundException(`Unidad con id ${unidadId} no encontrada`);
    }

    const chofer = await this.usuarioRepository.findOne({ where: { id: choferId } });
    if (!chofer) {
      throw new NotFoundException(`Chofer con id ${choferId} no encontrado`);
    }

    if (unidad.status === Status.HABILITADO) {
      throw new BadRequestException(`La unidad ya está habilitada para la jornada`);
    }

    unidad.chofer = chofer;
    unidad.status = Status.HABILITADO;

    return this.unidadRepository.save(unidad);
  }

}



