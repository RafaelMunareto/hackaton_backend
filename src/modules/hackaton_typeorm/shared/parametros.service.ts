import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateParametrosDto } from './dto/create_parametros_dto';
import { UpdateParametrosDto } from './dto/update_parametros_dto';
import { Parametros } from './entities/parametros.entity';
import { Realize } from './entities/realize.entity';

@Injectable()
export class ParametrosService {
  constructor(
    @InjectRepository(Parametros)
    private readonly parametrosRepository: Repository<Parametros>,
  ) {}

  findAll() {
    return this.parametrosRepository.find();
  }

  findOne(params) {
    const course = this.parametrosRepository.find({
      where: {
        iAnoMes: +params.iAnoMes,
        iItemRealize: +params.iItemRealize,
        iGrupoRealize: +params.iGrupoRealize,
      },
    });
    if (!course) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    return course;
  }

  create(body: CreateParametrosDto) {
    const realize = this.parametrosRepository.create(body);
    return this.parametrosRepository.save(realize);
  }

  async update(params, body: UpdateParametrosDto) {
    const realize = await this.parametrosRepository.find({
      where: {
        iAnoMes: +params.iAnoMes,
        iItemRealize: +params.iItemRealize,
        iGrupoRealize: +params.iGrupoRealize,
      },
    });

    if (!realize) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.parametrosRepository.remove(realize);
    return this.parametrosRepository.save(body);
  }

  async remove(params) {
    const parametros = await this.parametrosRepository.find({
      where: {
        iAnoMes: +params.iAnoMes,
        iItemRealize: +params.iItemRealize,
        iGrupoRealize: +params.iGrupoRealize,
      },
    });
    if (!parametros) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    return this.parametrosRepository.remove(parametros);
  }
}
