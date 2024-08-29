import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destino } from './entities/destino.entity';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';

@Injectable()
export class DestinoService {
  constructor(
    @InjectRepository(Destino)
    private destinoRepository: Repository<Destino>,
  ) {}

  create(createDestinoDto: CreateDestinoDto) {
    const destino = this.destinoRepository.create(createDestinoDto);
    return this.destinoRepository.save(destino);
  }

  findAll() {
    return this.destinoRepository.find();
  }

  findOne(id: number) {
    return this.destinoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDestinoDto: UpdateDestinoDto) {
    await this.destinoRepository.update(id, updateDestinoDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.destinoRepository.delete(id);
  }
}


