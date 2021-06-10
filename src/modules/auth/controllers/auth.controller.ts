import { UseGuards, Controller, Post, Request, Get, Body, Header } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req) {
      return this.authService.login(req.user);
    } 

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }

    @Post('token')
    updateToken(@Body('access_token') token: string ): string {
        return 'new token backed from ' + token;
    }

}
