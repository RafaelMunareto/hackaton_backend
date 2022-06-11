import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRealizeDto } from '../hackaton_typeorm/dto/create_realize_dto';
import { UpdateRealizeDto } from '../hackaton_typeorm/dto/update_realize_dto';
import { RealizePrismaService } from './realize_prisma.service';

@Controller('hackaton-prisma')
export class RealizePrismaController {
  constructor(private readonly realizePrismaService: RealizePrismaService) {}

  @Post()
  create(@Body() createRealizeDto: CreateRealizeDto) {
    return this.realizePrismaService.create(createRealizeDto);
  }

  @Get()
  findAll() {
    return this.realizePrismaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.realizePrismaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRealizeDto: UpdateRealizeDto) {
    return this.realizePrismaService.update(+id, updateRealizeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realizePrismaService.remove(+id);
  }
}
