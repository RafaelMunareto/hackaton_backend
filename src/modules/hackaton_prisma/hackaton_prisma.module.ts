import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ParametrosPrismaService } from './parametros_prisma.service';
import { RealizePrismaController } from './realize_prisma.controller';
import { RealizePrismaService } from './realize_prisma.service';

@Module({
  imports: [PrismaClient],
  controllers: [RealizePrismaController],
  providers: [RealizePrismaService, ParametrosPrismaService],
})
export class HackatonPrismaModule {}
