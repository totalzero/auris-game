"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMenu_1 = require("../BaseMenu");
const Focus_1 = require("../../tools/Focus");
class BasePlayerMenuView extends BaseMenu_1.BaseMenu {
    constructor(view) {
        super();
        this._menuClose = "powrót";
        this._previousView = view;
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
        this.say(this._menuClose);
    }
}
exports.default = BasePlayerMenuView;
