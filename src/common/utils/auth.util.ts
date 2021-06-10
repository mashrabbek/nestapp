import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthUtils {
    constructor() {}
    hash(password: string): Promise<string> {
        return bcrypt.hash(password, parseInt(process.env.HASH_SALT));
    }
}