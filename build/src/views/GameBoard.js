"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseView_1 = __importDefault(require("./BaseView"));
const iterator_1 = __importDefault(require("../tools/iterator"));
const Focus_1 = require("../tools/Focus");
const ContextMenuFactory_1 = __importDefault(require("./ContextMenu/ContextMenuFactory"));
const Player_1 = __importDefault(require("../std/Player"));
const MiniMapView_1 = __importDefault(require("./MiniMapView"));
const ExitsMenu_1 = __importDefault(require("./ExitsMenu"));
const PlayerMainView_1 = __importDefault(require("./PlayerViews/PlayerMainView"));
class GameBoard extends BaseView_1.default {
    constructor() {
        super();
        this._cursor = { x: 0, y: 0 };
        this._objIter = new iterator_1.default([]);
        if (Player_1.default.Instance != undefined)
            this._location = Player_1.default.Instance.Room;
    }
    cursor() {
        this.say(this._collectionSummary());
        if (this._objects != undefined)
            this._objIter = new iterator_1.default(this._objects);
    }
    cursorUp() {
        var _a;
        if (this._cursor.y <= 1) {
            this._cursor.y += 1;
            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
            this.cursor();
        }
        else {
            this.say("tam nie ma nic");
        }
    }
    cursorDown() {
        var _a;
        if (this._cursor.y > 0) {
            this._cursor.y -= 1;
            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
            this.cursor();
        }
        else {
            this.say("tam nie ma nic");
        }
    }
    cursorLeft() {
        var _a;
        if (this._cursor.x > 0) {
            this._cursor.x -= 1;
            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
            this.cursor();
        }
        else {
            this.say("tam nie ma nic");
        }
    }
    cursorRight() {
        var _a;
        if (this._cursor.x <= 1) {
            this._cursor.x += 1;
            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
            this.cursor();
        }
        else {
            this.say("tam nic nie ma");
        }
    }
    cursorTab() {
        var _a, _b;
        if (this._objects != undefined && this._objects.length > 0) {
            if (this._objIter.HasNext()) {
                this._selectedObject = this._objIter.Next();
                if (((_a = this._selectedObject) === null || _a === void 0 ? void 0 : _a.Name) != undefined)
                    this.say((_b = this._selectedObject) === null || _b === void 0 ? void 0 : _b.Name);
            }
            else {
                this._objIter.Reset();
                this.cursorTab();
            }
        }
        else {
            this.say("nic tu nie ma");
        }
    }
    execute() {
        if (this._selectedObject)
            (0, Focus_1.ChangeView)((0, ContextMenuFactory_1.default)(this, this._selectedObject));
    }
    exit() {
        //new context menu z zapisz main menu i wroc do gry
    }
    Keyboard(key) {
        super.Keyboard(key);
        switch (key.key) {
            case "p":
                this.openPlayerMenu();
                break;
            case "e":
                this.openExitsMenu();
                break;
            case "m":
                this.openMinimap();
                break;
            case "ArrowUp":
                this.cursorUp();
                break;
            case "ArrowDown":
                this.cursorDown();
                break;
            case "ArrowLeft":
                this.cursorLeft();
                break;
            case "ArrowRight":
                this.cursorRight();
                break;
            case "Enter":
                this.execute();
                break;
            case "Escape":
                this.exit();
                break;
            case "Tab":
                this.cursorTab();
                break;
            default:
                super.Keyboard(key);
                break;
        }
    }
    _collectionSummary() {
        var _a, _b;
        let summary = '';
        if (this._objects != undefined) {
            if (this._objects.length > 0) {
                summary = `
${(_a = this._location) === null || _a === void 0 ? void 0 : _a.getFloor(this._cursor.x, this._cursor.y)}.
Obiekty: ${this._objects.length}`;
            }
            else {
                summary = `
    ${(_b = this._location) === null || _b === void 0 ? void 0 : _b.getFloor(this._cursor.x, this._cursor.y)}.
`;
            }
        }
        return summary;
    }
    openMinimap() {
        (0, Focus_1.ChangeView)(new MiniMapView_1.default(this));
    }
    openExitsMenu() {
        (0, Focus_1.ChangeView)(new ExitsMenu_1.default(this));
    }
    openPlayerMenu() {
        (0, Focus_1.ChangeView)(new PlayerMainView_1.default(this));
    }
}
exports.default = GameBoard;
