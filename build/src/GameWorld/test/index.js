"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testArea = void 0;
const Loc1_1 = __importDefault(require("./Loc1"));
const Loc2_1 = __importDefault(require("./Loc2"));
const loc1 = (0, Loc1_1.default)();
const loc2 = (0, Loc2_1.default)();
exports.testArea = {
    loc1,
    loc2,
};
