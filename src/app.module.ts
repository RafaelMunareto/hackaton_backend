import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HackatonModule } from './modules/hackaton_typeorm/hackaton.module';
import { HackatonPrismaModule } from './modules/hackaton_prisma/hackaton_prisma.module';

@Module({
  imports: [
    HackatonModule,

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
    ConfigModule.forRoot(),
    HackatonPrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
