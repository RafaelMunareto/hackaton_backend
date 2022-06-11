import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HackatonPrismaModule } from './modules/hackaton_prisma/hackaton_prisma.module';
import { HackatonTypeOrmModule } from './modules/hackaton_typeorm/hackatonTypeOrm.module';

@Module({
  imports: [
    //typorm
    HackatonTypeOrmModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'caixa',
      password: 'caixa',
      database: 'Caixa',
      autoLoadEntities: true,
      synchronize: true,
    }),
    //prisma
    // ConfigModule.forRoot(),
    // HackatonPrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
