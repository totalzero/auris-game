"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../std/Player"));
const Focus_1 = require("../tools/Focus");
const GameState_1 = __importDefault(require("../tools/GameState"));
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
            this.say("tutaj jesteś: " + this._location.Name + ", " + this.exitInfo());
        }
        else {
            this.say(this._location.Name + ", " + this.exitInfo());
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
            this._location = GameState_1.default.getRoom(location);
            this.cursor();
        }
        else {
            this.say("brak");
        }
    }
    exitInfo() {
        function convert(i) {
            switch (i) {
                case "north":
                    return "Północ";
                    break;
                case "south":
                    return "Południe";
                    break;
                case "west":
                    return "Zachód";
                    break;
                case "east":
                    return "Wschód";
                    break;
                default:
                    return "";
                    break;
            }
        }
        let info = "";
        const exits = [];
        for (let i in this._location.Exits) {
            exits.push(convert(i));
        }
        for (let ex of exits) {
            info = info + ", " + ex;
        }
        return "wyjścia: " + exits;
    }
}
exports.default = MiniMapView;
