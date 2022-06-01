"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Focus_1 = require("../../tools/Focus");
const BaseMenu_1 = require("../BaseMenu");
class BaseContextMenu extends BaseMenu_1.BaseMenu {
    constructor(view, obj) {
        super();
        this._previousView = view;
        this._obj = obj;
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
    _run() {
        super._run();
        this.backToPreviousView();
    }
    backToPreviousView() {
        (0, Focus_1.ChangeView)(this._previousView);
    }
}
exports.default = BaseContextMenu;
