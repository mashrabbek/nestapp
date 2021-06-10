import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { 
    }

    async authenticate(username:string, password: string) {
        let user = await this.userService.findByUsername(username);
        if(user) {       
            let isMatch = await bcrypt.compare(password, user.password);
            if(isMatch) {
                const {password, ...result} = user;
                return result;
            }
        }
        return null;
    }
    
    login(user: any) {
        let payload = {username: user.username, id: user.id};
        let jwt = this.jwtService.sign(payload);
        return { access_token: jwt };
    }
   
}
