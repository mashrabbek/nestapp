import { Global, Module } from "@nestjs/common";
import {DatabaseConfigProvider} from "./providers/dbconnection";

@Global()
@Module({
    imports: [],
    providers: [DatabaseConfigProvider]
})
export class SharedModule {}