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
exports.carsController = void 0;
const common_1 = require("@nestjs/common");
const cars_service_1 = require("./cars.service");
let carsController = class carsController {
    constructor(carService) {
        this.carService = carService;
    }
    async addCar(carName, carModel, carSeater, carDesc, carPrice) {
        const generatedId = await this.carService.insertCar(carName, carModel, carSeater, carDesc, carPrice);
        return 'Inserted Successfully';
    }
    async getAllCars() {
        const result = await this.carService.getCars();
        return result;
    }
    async getCarById(carId) {
        const result = await this.carService.getCarbyId(carId);
        return result;
    }
    async deleteCar(carId) {
        await this.carService.deleteCar(carId);
        return 'Deleted Successfully';
    }
    async updateCar(carId, carName, carModel, carSeater, carDesc, carPrice) {
        await this.carService.updateCar(carId, carName, carModel, carSeater, carDesc, carPrice);
        return 'Updated Successfully';
    }
    async getCarByName(name) {
        const result = await this.carService.CarByName(name);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('model')),
    __param(2, (0, common_1.Body)('seater')),
    __param(3, (0, common_1.Body)('description')),
    __param(4, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, Number]),
    __metadata("design:returntype", Promise)
], carsController.prototype, "addCar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], carsController.prototype, "getAllCars", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], carsController.prototype, "getCarById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], carsController.prototype, "deleteCar", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('model')),
    __param(3, (0, common_1.Body)('seater')),
    __param(4, (0, common_1.Body)('description')),
    __param(5, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, Number]),
    __metadata("design:returntype", Promise)
], carsController.prototype, "updateCar", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], carsController.prototype, "getCarByName", null);
carsController = __decorate([
    (0, common_1.Controller)('cars'),
    __metadata("design:paramtypes", [cars_service_1.carsService])
], carsController);
exports.carsController = carsController;
;
//# sourceMappingURL=cars.controller.js.map