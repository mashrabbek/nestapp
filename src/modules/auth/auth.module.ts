import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.stategy';
import { LocalStrategy } from './services/local.strategy';
@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'secretKey', // TODO
    signOptions: { expiresIn: '160s' },
  }),],
  providers: [AuthService, LocalStrategy, JwtStrategy, LocalAuthGuard, JwtAuthGuard],
  controllers: [AuthController]
})
export class AuthModule {}
