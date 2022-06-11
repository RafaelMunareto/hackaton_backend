import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRealizeDto } from './dto/create_realize_dto';
import { UpdateRealizeDto } from './dto/update_realize_dto';
import { RealizeService } from './realize.service';
@Controller('realize')
export class RealizeController {
  constructor(private service: RealizeService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':iAnoMes/:iItemRealize/:iCgcUnidade')
  findOne(@Param() params: string) {
    return this.service.findOne(params);
  }

  @Get('limit/:limit')
  findAllQueryBuilder(@Param() params: string) {
    return this.service.findAllQueryBuilder(params);
  }

  @Get('join/:limit')
  findJoinQueryBuilder(@Param() params: string) {
    return this.service.queryBuilderJoin(params);
  }

  @Post()
  create(@Body() createRealizeDto: CreateRealizeDto) {
    return this.service.create(createRealizeDto);
  }

  @Patch(':iAnoMes/:iItemRealize/:iCgcUnidade')
  update(@Param() params: string, @Body() UpdateRealizeDto: UpdateRealizeDto) {
    return this.service.update(params, UpdateRealizeDto);
  }

  @Delete(':iAnoMes/:iItemRealize/:iCgcUnidade')
  remove(@Param() params: string) {
    return this.service.remove(params);
  }
}
