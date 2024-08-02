import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clientes } from './schemas/contas.schema';
import { Model } from 'mongoose';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
    constructor(@InjectModel(Clientes.name) private contaModel: Model<Clientes>) {}

    create(cliente: CreateClienteDto)  {
        const createdCliente = new this.contaModel(cliente);
        return createdCliente.save();
        }

    findAll() {
        return this.contaModel.find().exec();
    }
  
    findOne(cpf: string) {
        return this.contaModel.findOne({cpf: cpf}).exec();
    }
  
    async update(cpf: string, cliente: UpdateClienteDto) {        
        const contaUpd = await this.contaModel.findOneAndUpdate({cpf: cpf}, cliente).exec();
        return contaUpd
    }
  
    async remove(cpf: string) {        
        return await this.contaModel.findOneAndDelete({cpf: cpf}).exec();
    }
}
