import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TesteCaixaService } from './shared/teste_caixa.service';

@Controller('teste-caixa')
export class TesteCaixaController {
    constructor(private service: TesteCaixaService) {}

    @Get()
    findAll() {
      return this.service.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: String) {
      return this.service.findOne(id);
    }

    @Post()
    create(@Body() body){
      return this.service.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: String, @Body() body, ){
      return this.service.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: String){
      return this.service.delete(id);
    }
  
}