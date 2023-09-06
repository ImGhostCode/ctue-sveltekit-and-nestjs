import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';

@Injectable()
export class AuthService {
    register(registerDto: RegisterDto) {
        return 'Register'
    }

    login(loginDto: LoginDto) {
        return 'Login'
    }
}
