import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Viaje } from './entities/viaje.entity';
import { CreateViajeDto } from './dto/create-viaje.dto';

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(Viaje)
    private viajesRepository: Repository<Viaje>,
  ) {}

  create(createViajeDto: CreateViajeDto) {
    const viaje = this.viajesRepository.create(createViajeDto);
    return this.viajesRepository.save(viaje);
  }

  findAll() {
    return this.viajesRepository.find({
      relations: ['unidad', 'chofer'],
    });
  }

  findOne(id: number) {
    return this.viajesRepository.findOne({
      where: { id },
      relations: ['unidad', 'chofer'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.viajesRepository.delete(id);
  }
}

