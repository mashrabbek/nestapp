import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from "./entities/user.entity"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthUtils } from 'src/common/utils/auth.util';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, AuthUtils],
  exports:[UserService]
})
export class UserModule {}
