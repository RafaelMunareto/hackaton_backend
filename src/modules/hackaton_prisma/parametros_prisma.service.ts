import { Injectable } from '@nestjs/common';
import { CreateParametrosDto } from '../hackaton_typeorm/dto/create_parametros_dto';
import { CreateParametrosPrismaDto } from './dto/create_parametros_prisma.dto';
import { UpdateParametrosPrisma } from './dto/update_parametros_prisma.dto';

@Injectable()
export class ParametrosPrismaService {
  create(createParametrosService: CreateParametrosPrismaDto) {
    return 'This action adds a new hackatonPrisma';
  }

  findAll() {
    return `This action returns all hackatonPrisma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hackatonPrisma`;
  }

  update(id: number, updateParametrosPrisma: UpdateParametrosPrisma) {
    return `This action updates a #${id} hackatonPrisma`;
  }

  remove(id: number) {
    return `This action removes a #${id} hackatonPrisma`;
  }
}
