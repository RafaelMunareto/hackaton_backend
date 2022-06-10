import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class TesteCaixaService {
  private messages: any[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }

  findOne(id) {
    return this.messages.filter((a) => a.id == id);
  }

  create(body){
   this.messages.push(body);
   return body;
  }

  update(id: String, body){
   this.messages = this.messages.map((a) => {
    if(a.id == id) {
      return body;
    }
    return a;
   });
   return this.messages;
  }

  delete(id: String)
  {
     this.messages.filter((a) => a.id != id);
     return "Exclusão ok!";
  }
}
