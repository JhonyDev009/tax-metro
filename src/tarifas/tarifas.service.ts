import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarifa } from './entities/tarifa.entity';
import { CreateTarifaDto } from './dto/create-tarifa.dto';

@Injectable()
export class TarifasService {
  constructor(
    @InjectRepository(Tarifa)
    private tarifasRepository: Repository<Tarifa>,
  ) {}

  create(createTarifaDto: CreateTarifaDto) {
    const tarifa = this.tarifasRepository.create(createTarifaDto);
    return this.tarifasRepository.save(tarifa);
  }

  findAll() {
    return this.tarifasRepository.find();
  }

  findOne(id: number) {
    return this.tarifasRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.tarifasRepository.delete(id);
  }
}
