import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './config/logging.config'
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, ConfigModule.forRoot({isGlobal: true}),  WinstonModule.forRoot(winstonOptions) ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
