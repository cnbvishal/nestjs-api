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
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_1 = require("@nestjs/jwt");
let userController = class userController {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async addUser(userName, userEmail, userPassword, userConfirmPassword) {
        const generatedId = await this.userService.insertUser(userName, userEmail, userPassword, userConfirmPassword);
        return generatedId;
    }
    async getAllUsers() {
        const result = await this.userService.getUser();
        return result;
    }
    async login(email) {
        let result;
        result = await this.userService.loginUser(email);
        if (result === undefined) {
            return new Error('Email not Exists');
        }
        const jwt = await this.jwtService.signAsync(result.id);
        console.log('token ', jwt);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __param(3, (0, common_1.Body)('confirmPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], userController.prototype, "addUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], userController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], userController.prototype, "login", null);
userController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.userService,
        jwt_1.JwtService])
], userController);
exports.userController = userController;
//# sourceMappingURL=user.controller.js.map