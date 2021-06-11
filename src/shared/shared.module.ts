import { Global, Module, CacheModule } from "@nestjs/common";
import { ApiConfigService } from "./services/api-config.service";
import { CacheService } from "./services/cache.service";

let providers = [
    ApiConfigService, CacheService
]
@Global()
@Module({
    imports: [CacheModule.register()],
    providers: [...providers],
    exports: [...providers]
})
export class SharedModule {}