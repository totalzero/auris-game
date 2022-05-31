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
        this._cursor.y += 1;
        this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
        this.cursor();
    }
    cursorDown() {
        var _a;
        this._cursor.y -= 1;
        this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
        this.cursor();
    }
    cursorLeft() {
        var _a;
        this._cursor.x -= 1;
        this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
        this.cursor();
    }
    cursorRight() {
        var _a;
        this._cursor.x += 1;
        this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);
        this.cursor();
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
        switch (key.key) {
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
        var _a;
        let summary = '';
        if (this._objects != undefined) {
            if (this._objects.length > 0)
                summary = `
${(_a = this._location) === null || _a === void 0 ? void 0 : _a.getFloor(this._cursor.x, this._cursor.y)}.
Obiekty: ${this._objects.length}`;
        }
        return summary;
    }
}
exports.default = GameBoard;
