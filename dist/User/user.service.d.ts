import { user } from "./user.model";
import { Model } from "mongoose";
export declare class userService {
    private readonly UserModel;
    cars: user[];
    constructor(UserModel: Model<user>);
    insertUser(name: string, email: string, password: string, confirmPassword: string): Promise<user & {
        _id: any;
    }>;
    getUser(): Promise<{
        id: string;
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }[]>;
    loginUser(email: any): Promise<false | (user & {
        _id: any;
    })>;
}
