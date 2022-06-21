"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loc1_1 = require("./GameWorld/test/loc1");
const Player_1 = __importDefault(require("./std/Player"));
const FOCUS = __importStar(require("./tools/Focus"));
const GameState_1 = __importDefault(require("./tools/GameState"));
const speech_1 = __importDefault(require("./tools/speech"));
const MainMenu_1 = __importDefault(require("./views/MainMenu"));
const player = new Player_1.default();
player.Room = GameState_1.default.getRoom(loc1_1.Loc1);
FOCUS.ChangeView(new MainMenu_1.default());
window.addEventListener('keydown', (event) => {
    speech_1.default.stop();
    FOCUS.keyListener(event);
});
