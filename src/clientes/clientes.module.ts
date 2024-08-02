import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Clientes, ClientesSchema } from './schemas/contas.schema';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesModule],
  imports: [MongooseModule.forFeature([{name: Clientes.name, schema: ClientesSchema}])]
})
export class ClientesModule {}
