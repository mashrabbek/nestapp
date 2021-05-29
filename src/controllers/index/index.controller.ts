import { Controller, Get } from '@nestjs/common';
import { IndexService } from '../../services/index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  getHello(): string {
    return this.indexService.getHello();
  }
}
