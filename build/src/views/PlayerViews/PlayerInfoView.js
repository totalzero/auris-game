"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../../std/Player"));
const Focus_1 = require("../../tools/Focus");
const BaseMenu_1 = require("../BaseMenu");
class PlayerInfoView extends BaseMenu_1.BaseMenu {
    constructor(view) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this._previousView = view;
        this._options = [
            [`Poziom: ${Player_1.default.Instance.Level}`, () => { }],
            [`punkty doświadczenia: ${(_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Experience}`, () => { }],
            [`punkty zdrowia: ${(_b = Player_1.default.Instance) === null || _b === void 0 ? void 0 : _b.HP} / ${(_c = Player_1.default.Instance) === null || _c === void 0 ? void 0 : _c.MaxHP}`, () => { }],
            [`Atak: ${(_d = Player_1.default.Instance) === null || _d === void 0 ? void 0 : _d.Offensive}`, () => { }],
            [`Obrona: ${(_e = Player_1.default.Instance) === null || _e === void 0 ? void 0 : _e.Defensive}`, () => { }],
            [`Monety: ${(_f = Player_1.default.Instance) === null || _f === void 0 ? void 0 : _f.Money}`, () => { }]
        ];
        this.say("informacje o postaci");
    }
    Keyboard(key) {
        switch (key.key) {
            case "Escape":
                this.backToPreviousView();
                break;
            default:
                super.Keyboard(key);
                break;
        }
    }
    backToPreviousView() {
        (0, Focus_1.ChangeView)(this._previousView);
        this.say("powrót");
    }
}
exports.default = PlayerInfoView;
