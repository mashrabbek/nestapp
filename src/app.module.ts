import { Module } from '@nestjs/common';
import { CoreModule } from './modules/core/core.module';
import { TempModule } from './modules/temp/temp.module';

@Module({
  imports: [CoreModule, TempModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
