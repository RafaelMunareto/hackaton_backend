import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRealizeDto } from './shared/dto/create_realize_dto';
import { UpdateRealizeDto } from './shared/dto/update_realize_dto';
import { RealizeService } from './shared/realize.service';

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

  @Get('join')
  findJoin() {
    return this.service.join();
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
