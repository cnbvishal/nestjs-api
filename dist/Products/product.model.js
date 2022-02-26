"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carSchema = void 0;
const mongoose = require("mongoose");
exports.carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    model: { type: Number, required: true },
    seater: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});
//# sourceMappingURL=product.model.js.map