"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const speech_1 = __importDefault(require("../tools/speech"));
class BaseView {
    constructor() {
        this.say = speech_1.default.say;
    }
    Keyboard(key) {
        //Speech.stop() 
    }
}
exports.default = BaseView;
