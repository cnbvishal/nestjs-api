"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let userService = class userService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        this.cars = [];
    }
    async insertUser(name, email, password, confirmPassword) {
        const newUser = new this.UserModel({ name: name, email: email, password: password, confirmPassword: confirmPassword });
        const result = await newUser.save();
        return result;
    }
    async getUser() {
        const users = await this.UserModel.find().exec();
        return users.map((user) => ({ id: user.id, name: user.name, email: user.email, password: user.password, confirmPassword: user.confirmPassword }));
    }
    async loginUser(email) {
        const user = await this.UserModel.findOne({ email });
        if (user === undefined)
            return false;
        return user;
    }
};
userService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], userService);
exports.userService = userService;
//# sourceMappingURL=user.service.js.map