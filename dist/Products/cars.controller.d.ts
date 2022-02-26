import { carsService } from "./cars.service";
export declare class carsController {
    private readonly carService;
    constructor(carService: carsService);
    addCar(carName: string, carModel: number, carSeater: number, carDesc: string, carPrice: number): Promise<string>;
    getAllCars(): Promise<{
        id: string;
        name: string;
        model: number;
        seater: number;
        description: string;
        price: number;
    }[]>;
    getCarById(carId: string): Promise<{
        id: string;
        name: string;
        model: number;
        seater: number;
        description: string;
        price: number;
    }>;
    deleteCar(carId: string): Promise<string>;
    updateCar(carId: string, carName: string, carModel: number, carSeater: number, carDesc: string, carPrice: number): Promise<string>;
    getCarByName(name: any): Promise<import("./car.model").car & {
        _id: any;
    }>;
}
