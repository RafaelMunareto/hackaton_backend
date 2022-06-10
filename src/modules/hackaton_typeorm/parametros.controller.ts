import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateParametrosDto } from './shared/dto/create_parametros_dto';
import { UpdateParametrosDto } from './shared/dto/update_parametros_dto';
import { ParametrosService } from './shared/parametros.service';

@Controller('parametros')
export class ParametrosController {
  constructor(private service: ParametrosService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':iAnoMes/:iItemRealize/:iGrupoRealize')
  findOne(@Param() params: string) {
    return this.service.findOne(params);
  }

  @Post()
  create(@Body() createRealizeDto: CreateParametrosDto) {
    return this.service.create(createRealizeDto);
  }

  @Patch(':iAnoMes/:iItemRealize/:iGrupoRealize')
  update(
    @Param() params: string,
    @Body() UpdateRealizeDto: UpdateParametrosDto,
  ) {
    return this.service.update(params, UpdateRealizeDto);
  }

  @Delete(':iAnoMes/:iItemRealize/:iGrupoRealize')
  remove(@Param() params: string) {
    return this.service.remove(params);
  }
}
