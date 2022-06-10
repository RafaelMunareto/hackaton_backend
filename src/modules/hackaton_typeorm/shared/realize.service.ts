import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateRealizeDto } from './dto/create_realize_dto';
import { UpdateRealizeDto } from './dto/update_realize_dto';
import { Realize } from './entities/realize.entity';

@Injectable()
export class RealizeService {
  constructor(
    @InjectRepository(Realize)
    private readonly realizeRepository: Repository<Realize>,
  ) {}

  findAll() {
    return this.realizeRepository.find();
  }

  join() {
    return this.realizeRepository.find();
  }

  findOne(params) {
    const course = this.realizeRepository.find({
      where: {
        iAnoMes: +params.iAnoMes,
        iItemRealize: +params.iItemRealize,
        iCgcUnidade: +params.iCgcUnidade,
      },
    });
    if (!course) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  create(body: CreateRealizeDto) {
    const realize = this.realizeRepository.create(body);
    return this.realizeRepository.save(realize);
  }

  async update(params, body: UpdateRealizeDto) {
    const realize = await this.realizeRepository.find({
      where: {
        iAnoMes: +params.iAnoMes,
        iItemRealize: +params.iItemRealize,
        iCgcUnidade: +params.iCgcUnidade,
      },
    });

    if (!realize) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.realizeRepository.remove(realize);
    return this.realizeRepository.save(body);
  }

  async remove(params) {
    const realize = await this.realizeRepository.find({
      where: {
        iAnoMes: +params.iAnoMes,
        iItemRealize: +params.iItemRealize,
        iCgcUnidade: +params.iCgcUnidade,
      },
    });
    if (!realize) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    return this.realizeRepository.remove(realize);
  }
}
