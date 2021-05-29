import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index/index.controller';
import { IndexService } from './services/index.service';
import { CatsController } from './controllers/cats/cats.controller';

@Module({
  imports: [],
  controllers: [IndexController, CatsController],
  providers: [IndexService],
})
export class AppModule {}
