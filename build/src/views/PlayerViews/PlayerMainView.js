"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Focus_1 = require("../../tools/Focus");
const BasePlayerMenuView_1 = __importDefault(require("./BasePlayerMenuView"));
const PlayerArmamentView_1 = __importDefault(require("./PlayerArmamentView"));
const PlayerEquipmentView_1 = __importDefault(require("./PlayerEquipmentView"));
const PlayerInfoView_1 = __importDefault(require("./PlayerInfoView"));
class PlayerMainView extends BasePlayerMenuView_1.default {
    constructor(view) {
        super(view);
        this._menuClose = "zamykam menu";
        this._options = [
            ["Informacje", () => {
                    this.playerInfo();
                }],
            ["Uzbrojenie", () => {
                    this.armament();
                }],
            ["Ekwipunek", () => {
                    this.equipment();
                }],
            ["Umiejętności", () => {
                    this.skills();
                }]
        ];
        this.say("menu postaci");
    }
    armament() {
        (0, Focus_1.ChangeView)(new PlayerArmamentView_1.default(this));
    }
    equipment() {
        (0, Focus_1.ChangeView)(new PlayerEquipmentView_1.default(this));
    }
    playerInfo() {
        (0, Focus_1.ChangeView)(new PlayerInfoView_1.default(this));
    }
    skills() {
        //menu umiejetnosci - do przemyslenia
    }
}
exports.default = PlayerMainView;
