import { car } from "./product.model";
import { Model } from "mongoose";
export declare class carsService {
    private readonly CarModel;
    cars: car[];
    constructor(CarModel: Model<car>);
    insertCar(name: string, model: number, seater: number, desc: string, price: number): Promise<string>;
    getCars(): Promise<{
        id: string;
        name: string;
        model: number;
        seater: number;
        description: string;
        price: number;
    }[]>;
    getCarbyId(carId: string): Promise<{
        id: string;
        name: string;
        model: number;
        seater: number;
        description: string;
        price: number;
    }>;
    deleteCar(carId: string): Promise<Error | import("mongodb").DeleteResult>;
    updateCar(carId: string, name: string, model: number, seater: number, desc: string, price: number): Promise<void>;
    private findCar;
}
