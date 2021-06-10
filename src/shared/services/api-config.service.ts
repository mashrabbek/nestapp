import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {   
    }

    get jwtConfig(): any {
        return {
            secret: this.configService.get('JWT_ACCESS_TOKEN_KEY'),
            signOptions: { expiresIn: this.configService.get('JWT_ACCESS_TOKEN_LIFETIME') }
        }        
    }
}