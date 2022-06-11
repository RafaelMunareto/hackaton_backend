import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateRealizeDto } from '../hackaton_typeorm/dto/create_realize_dto';
import { UpdateRealizeDto } from '../hackaton_typeorm/dto/update_realize_dto';

@Injectable()
export class RealizePrismaService {
  constructor(private readonly prisma: PrismaService) {}

  create(CreateRealizePrisma: CreateRealizeDto) {
    return 'This action adds a new hackatonPrisma';
  }

  findAll() {
    return `This action returns all hackatonPrisma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hackatonPrisma`;
  }

  update(id: number, updateRealizeDto: UpdateRealizeDto) {
    return `This action updates a #${id} hackatonPrisma`;
  }

  remove(id: number) {
    return `This action removes a #${id} hackatonPrisma`;
  }
}
