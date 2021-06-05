import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigProvider {
    constructor(private configService: ConfigService) {}

    get typeOrmConfig() {
        return { 
            type: this.configService.get('DB_TYPE'),
            host: this.configService.get('DB_HOST'),
            port: this.configService.get('DB_PORT'),
            username: this.configService.get('DB_USERNAME'),
            password: this.configService.get('DB_PASSWORD'),
            database: this.configService.get('DB_DATABASE'),
            entities: [],
            synchronize: true,
        }
    }
}
