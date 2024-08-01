import { Injectable } from '@nestjs/common';

@Injectable()
export class ContasService {
    constructor() {}

    create(conta: any)  {
        return "conta criada com sucesso " + JSON.stringify(conta);
    }

    findAll() {
        return "contas encontradas!";
    }
  
    findOne(id: number) {
        return "conta encontrada!";
    }
  
    async update(id: number, conta: any) {        
        return "conta atualizada!";
    }
  
    async remove(id: number) {        
        return "conta removida!";
    }
}
