import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseConfigProvider } from './dbconnection';

describe('Dbconnection', () => {
  let provider: DatabaseConfigProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseConfigProvider],
    }).compile();

    provider = module.get<DatabaseConfigProvider>(DatabaseConfigProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
