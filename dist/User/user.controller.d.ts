import { userService } from './user.service';
import { JwtService } from '@nestjs/jwt';
export declare class userController {
    private readonly userService;
    private jwtService;
    constructor(userService: userService, jwtService: JwtService);
    addUser(userName: string, userEmail: string, userPassword: string, userConfirmPassword: string): Promise<import("./user.model").user & {
        _id: any;
    }>;
    getAllUsers(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }[]>;
    login(email: string): Promise<any>;
}
