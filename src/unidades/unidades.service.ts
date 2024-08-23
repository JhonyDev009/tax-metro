import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unidad } from './entities/unidade.entity';
import { CreateUnidadDto } from './dto/create-unidade.dto';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Unidad)
    private unidadesRepository: Repository<Unidad>,
  ) {}

  create(createUnidadDto: CreateUnidadDto) {
    const unidad = this.unidadesRepository.create(createUnidadDto);
    return this.unidadesRepository.save(unidad);
  }

  findAll() {
    return this.unidadesRepository.find();
  }

  findOne(id: number) {
    return this.unidadesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.unidadesRepository.delete(id);
  }
}
