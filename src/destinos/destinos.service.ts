import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destino } from './entities/destino.entity';
import { CreateDestinoDto } from './dto/create-destino.dto';

@Injectable()
export class DestinosService {
  constructor(
    @InjectRepository(Destino)
    private destinosRepository: Repository<Destino>,
  ) {}

  create(createDestinoDto: CreateDestinoDto) {
    const destino = this.destinosRepository.create(createDestinoDto);
    return this.destinosRepository.save(destino);
  }

  findAll() {
    return this.destinosRepository.find();
  }

  findOne(id: number) {
    return this.destinosRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.destinosRepository.delete(id);
  }
}

