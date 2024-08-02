import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contas } from './schemas/contas.schema';
import { Model } from 'mongoose';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Injectable()
export class ContasService {
    constructor(@InjectModel(Contas.name) private contaModel: Model<Contas>) {}

    create(conta: CreateContaDto)  {
        const createdConta = new this.contaModel(conta);
        return createdConta.save();
        }

    findAll() {
        return this.contaModel.find().exec();
    }
  
    findOne(numero: number) {
        return this.contaModel.findOne({numero: numero}).exec();
    }
  
    async update(numero: number, conta: UpdateContaDto) {        
        const contaUpd = await this.contaModel.findOneAndUpdate({numero: numero}, conta).exec();
        return contaUpd
    }
  
    async remove(numero: number) {        
        return await this.contaModel.findOneAndDelete({numero: numero}).exec();
    }
}
