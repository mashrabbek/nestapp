import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cache } from 'cache-manager'

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) public cacheManager: Cache) {
    }
}