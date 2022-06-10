import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametrosController } from './parametros.controller';
import { RealizeController } from './realize.controller';
import { Parametros } from './shared/entities/parametros.entity';
import { Realize } from './shared/entities/realize.entity';
import { ParametrosService } from './shared/parametros.service';
import { RealizeService } from './shared/realize.service';

@Module({
  imports: [TypeOrmModule.forFeature([Realize, Parametros])],
  controllers: [RealizeController, ParametrosController],
  providers: [RealizeService, ParametrosService],
})
export class HackatonModule {}
