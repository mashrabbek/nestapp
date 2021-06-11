import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {   
    }

    get accessTokenConfig(): any {
        return {
            secret: this.configService.get('JWT_ACCESS_TOKEN_KEY'),
            expiresIn: eval(this.configService.get('JWT_ACCESS_TOKEN_LIFETIME'))
        }
    }
    get refreshTokenConfig(): any {
        return {
            secret: this.configService.get('JWT_REFRESH_TOKEN_KEY'),
            expiresIn: eval(this.configService.get('JWT_REFRESH_TOKEN_LIFETIME'))
        }
    }
}