"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Focus_1 = require("../../tools/Focus");
const BaseMenu_1 = require("../BaseMenu");
class PlayerMainView extends BaseMenu_1.BaseMenu {
    constructor(view) {
        super();
        this._board = view;
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
        (0, Focus_1.ChangeView)(this._board);
    }
    armament() {
        //menu uzbrojenia, czyli player.slots
    }
    equipment() {
        //menu ekwipunku
    }
    playerInfo() {
        //menu informacji o postaci - parametry, hp, exp, punkty skill i tak dalej
    }
    skills() {
        //menu umiejetnosci - do przemyslenia
    }
}
exports.default = PlayerMainView;
