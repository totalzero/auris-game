"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../std/Player"));
const Focus_1 = require("../tools/Focus");
const BaseView_1 = __importDefault(require("./BaseView"));
class MiniMapView extends BaseView_1.default {
    constructor(board) {
        var _a;
        super();
        this._location = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room;
        this._gameBoard = board;
        this.cursor();
    }
    Keyboard(key) {
        switch (key.key) {
            case "ArrowUp":
                this.cursorNorth();
                break;
            case "ArrowDown":
                this.cursorSouth();
                break;
            case "ArrowLeft":
                this.cursorWest();
                break;
            case "ArrowRight":
                this.cursorEast();
                break;
            case "Escape":
                this.close();
                break;
            default:
                super.Keyboard(key);
                break;
        }
    }
    cursor() {
        var _a;
        if (this._location == ((_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room)) {
            this.say("*" + this._location.Name);
        }
        else {
            this.say(this._location.Name);
        }
    }
    cursorNorth() {
        var _a, _b;
        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.north);
    }
    cursorSouth() {
        var _a, _b;
        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.south);
    }
    cursorWest() {
        var _a, _b;
        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.west);
    }
    cursorEast() {
        var _a, _b;
        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.east);
    }
    close() {
        this.say("zamykam minimape");
        (0, Focus_1.ChangeView)(this._gameBoard);
    }
    isLocation(location) {
        if (location) {
            this._location = location;
            this.cursor();
        }
    }
}
exports.default = MiniMapView;
