import { Module } from '@nestjs/common';
import { TesteCaixaModule } from './modules/teste_caixa/teste_caixa.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TesteCaixaModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1442,
      username: 'caixa',
      password: 'caixa',
      database: 'Caixa',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
