"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("../../std/Player"));
const BasePlayerMenuView_1 = __importDefault(require("./BasePlayerMenuView"));
class PlayerSkillsView extends BasePlayerMenuView_1.default {
    constructor(view) {
        super(view);
        this.constructSkillOptions();
        this.say("menu umiejętności");
    }
    constructSkillOptions() {
        var _a;
        const skills = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Skills;
        if (skills) {
            for (let element of skills) {
                this.addSkillToMenu(element);
            }
        }
    }
    addSkillToMenu(skill) {
        this._options.push([`${skill.Name}`, () => {
                this.say(skill.Description);
            }]);
    }
}
exports.default = PlayerSkillsView;
