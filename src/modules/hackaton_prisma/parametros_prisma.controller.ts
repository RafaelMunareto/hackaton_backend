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
import { CreateParametrosPrismaDto } from './dto/create_parametros_prisma.dto';
import { UpdateParametrosPrisma } from './dto/update_parametros_prisma.dto';
import { ParametrosPrismaService } from './parametros_prisma.service';
import { RealizePrismaService } from './realize_prisma.service';

@Controller('hackaton-prisma')
export class ParametrosPrismaController {
  constructor(private readonly parametrosService: ParametrosPrismaService) {}

  @Post()
  create(@Body() CreateParametrosPrismaDto: CreateParametrosPrismaDto) {
    return this.parametrosService.create(CreateParametrosPrismaDto);
  }

  @Get()
  findAll() {
    return this.parametrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametrosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParametrosPrisma: UpdateParametrosPrisma,
  ) {
    return this.parametrosService.update(+id, updateParametrosPrisma);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametrosService.remove(+id);
  }
}
