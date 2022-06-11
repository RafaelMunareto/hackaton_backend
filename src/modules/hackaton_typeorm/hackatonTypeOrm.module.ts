import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parametros } from './entities/parametros.entity';
import { Realize } from './entities/realize.entity';
import { ParametrosController } from './parametros.controller';
import { ParametrosService } from './parametros.service';
import { RealizeController } from './realize.controller';
import { RealizeService } from './realize.service';

@Module({
  imports: [TypeOrmModule.forFeature([Realize, Parametros])],
  controllers: [RealizeController, ParametrosController],
  providers: [RealizeService, ParametrosService],
})
export class HackatonTypeOrmModule {}
