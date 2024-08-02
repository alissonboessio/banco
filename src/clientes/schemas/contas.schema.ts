import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'clientes'})
export class Clientes {
    @Prop({required: true})
    nome: string;
    @Prop({required: true})
    sobrenome: string;
    @Prop({required: true})
    cpf: string;
}

export const ClientesSchema = SchemaFactory.createForClass(Clientes)