import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HackatonModule } from './modules/hackaton_typeorm/hackaton.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
