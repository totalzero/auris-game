"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("../src/obj/Item"));
const Mobile_1 = __importDefault(require("../src/obj/Mobile"));
const Room_1 = __importDefault(require("../src/obj/Room"));
const AreaManager_1 = __importDefault(require("../src/tools/AreaManager"));
new AreaManager_1.default();
class testLocation extends Room_1.default {
    constructor() {
        super();
        this.Name = "lokacja testowa";
    }
}
class testItem extends Item_1.default {
    constructor() {
        super();
        this.Name = "item testowy";
    }
}
class testMob extends Mobile_1.default {
    constructor() {
        super();
        this.Name = "npc testowy";
    }
}
test('when AreaManager.get name of class then return this class object', () => {
    var _a;
    const manager = new AreaManager_1.default();
    const testloc = new testLocation();
    expect((_a = manager.getLocation(testLocation.name)) === null || _a === void 0 ? void 0 : _a.Name).toBe(testloc.Name);
});
test('when AreaManager.getItem with name of item class return object of this class', () => {
    var _a, _b;
    const item = new testItem();
    expect((_b = (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.getItem(testItem.name)) === null || _b === void 0 ? void 0 : _b.Name).toBe(item.Name);
});
test('when AreaManager.getMob with mob class then return this class object', () => {
    var _a, _b;
    const mob = new testMob();
    expect((_b = (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.getMob(testMob.name)) === null || _b === void 0 ? void 0 : _b.Name).toBe(mob.Name);
});
test('check if next class location will be correctly saved in AreaManager', () => {
    var _a, _b;
    class secondTestLocation extends Room_1.default {
        constructor() {
            super();
            this.Name = "second test class location";
        }
    }
    const secLocation = new secondTestLocation();
    expect((_b = (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.getLocation(secondTestLocation.name)) === null || _b === void 0 ? void 0 : _b.Name).toBe(secLocation.Name);
});
