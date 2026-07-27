import { RegisterUserDto } from "../dto/auth.dto";
import { LoginUserDto } from "../dto/auth.dto";
declare class AuthService {
    register(data: RegisterUserDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
        };
        token: string;
    }>;
    login(data: LoginUserDto): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            password: string;
        };
        token: string;
    }>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map