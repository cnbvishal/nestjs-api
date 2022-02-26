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
exports.carsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let carsService = class carsService {
    constructor(CarModel) {
        this.CarModel = CarModel;
        this.cars = [];
    }
    async insertCar(name, model, seater, desc, price) {
        const newCar = new this.CarModel({ name: name, model: model, seater: seater, description: desc, price: price });
        const result = await newCar.save();
        return 'inserted successfully';
    }
    async getCars() {
        const cars = await this.CarModel.find().exec();
        return cars.map((car) => ({ id: car.id, name: car.name, model: car.model, seater: car.seater, description: car.description, price: car.price }));
    }
    async getCarbyId(carId) {
        const car = await this.findCar(carId);
        return { id: car.id, name: car.name, model: car.model, seater: car.seater, description: car.description, price: car.price };
    }
    async deleteCar(carId) {
        const result = await this.CarModel.deleteOne({ _id: carId }).exec();
        if (result.deletedCount === 0) {
            return new Error();
        }
        return result;
    }
    async updateCar(carId, name, model, seater, desc, price) {
        const updatedcar = await this.findCar(carId);
        if (name) {
            updatedcar.name = name;
        }
        if (model) {
            updatedcar.model = model;
        }
        if (seater) {
            updatedcar.seater = seater;
        }
        if (desc) {
            updatedcar.description = desc;
        }
        if (price) {
            updatedcar.price = price;
        }
        updatedcar.save();
    }
    async findCar(id) {
        const car = await this.CarModel.findById(id).exec();
        if (!car) {
            throw new Error();
        }
        return car;
    }
};
carsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Car')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], carsService);
exports.carsService = carsService;
//# sourceMappingURL=products.service.js.map