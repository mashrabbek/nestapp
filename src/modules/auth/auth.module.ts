import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthUtils } from 'src/common/utils/auth.util';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.stategy';
import { LocalStrategy } from './services/local.strategy';
import { ApiConfigService } from '../../shared/services/api-config.service'
//import { SharedModule } from 'src/shared/shared.module';
@Module({
  imports: [UserModule, PassportModule, JwtModule.register({})],
  providers: [AuthService, LocalStrategy, JwtStrategy, LocalAuthGuard, JwtAuthGuard, AuthUtils],
  controllers: [AuthController]
})
export class AuthModule {}
