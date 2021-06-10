import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { winstonOptions } from './common/config/logging.config'
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ConfigModule.forRoot({load: [], isGlobal: true}), WinstonModule.forRoot(winstonOptions),  UserModule, AuthModule, SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
