"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../std/Player"));
const Focus_1 = require("../tools/Focus");
const GameState_1 = __importDefault(require("../tools/GameState"));
const BaseMenu_1 = require("./BaseMenu");
const GameBoard_1 = __importDefault(require("./GameBoard"));
class ExitsMenu extends BaseMenu_1.BaseMenu {
    constructor(view) {
        var _a;
        super();
        this._previousView = view;
        const rm = Player_1.default.Instance.Room;
        if (rm === null || rm === void 0 ? void 0 : rm.Exits.north) {
            const ex = rm.Exits.north;
            this._options.push(["Północ", () => {
                    Player_1.default.Instance.Room = GameState_1.default.getRoom(ex);
                }]);
        }
        if (rm === null || rm === void 0 ? void 0 : rm.Exits.south) {
            const ex = rm.Exits.south;
            this._options.push(["Południe", () => {
                    Player_1.default.Instance.Room = GameState_1.default.getRoom(ex);
                }]);
        }
        if (rm === null || rm === void 0 ? void 0 : rm.Exits.east) {
            const ex = (_a = rm.Exits) === null || _a === void 0 ? void 0 : _a.east;
            this._options.push(["Wschód", () => {
                    Player_1.default.Instance.Room = GameState_1.default.getRoom(ex);
                }]);
        }
        if (rm === null || rm === void 0 ? void 0 : rm.Exits.west) {
            const ex = rm.Exits.west;
            this._options.push(["Zachód", () => {
                    Player_1.default.Instance.Room = GameState_1.default.getRoom(ex);
                }]);
        }
        this.say("menu przejść");
    }
    Keyboard(key) {
        switch (key.key) {
            case "Escape":
                this.BackToPreviousView();
                break;
            default:
                super.Keyboard(key);
                break;
        }
    }
    _run() {
        super._run();
        this.newGameBoard();
    }
    BackToPreviousView() {
        (0, Focus_1.ChangeView)(this._previousView);
        this.say("zamykam menu");
    }
    newGameBoard() {
        (0, Focus_1.ChangeView)(new GameBoard_1.default());
        this.say("przechodze do nowej lokacji");
    }
}
exports.default = ExitsMenu;
