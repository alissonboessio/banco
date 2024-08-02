import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ContasModule,
    ClientesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
      MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService): Promise<{ uri: string }> => ({
          uri: configService.get<string>('MONGODB_URI'),
        }),
        inject: [ConfigService],
      }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
