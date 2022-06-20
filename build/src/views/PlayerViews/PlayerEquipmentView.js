"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../../std/Player"));
const BasePlayerMenuView_1 = __importDefault(require("./BasePlayerMenuView"));
class PlayerEquipmentView extends BasePlayerMenuView_1.default {
    constructor(view) {
        super(view);
        this.constructMenu();
        this.say("ekwipunek");
    }
    addItemToMenu(item) {
        this._options.push([`${item.Name}`, () => {
                //kontekst menu dla itema, zdejmij wyrzuc zaloz uzyj
            }]);
    }
    constructMenu() {
        var _a;
        const eq = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Equipment;
        if (eq && (eq.length != 0)) {
            for (let i of eq) {
                this.addItemToMenu(i);
            }
        }
        else {
            this._options.push(["pusto", () => { }]);
        }
    }
}
exports.default = PlayerEquipmentView;
