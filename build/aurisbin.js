/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build/src/GameWorld/test/index.js":
/*!*******************************************!*\
  !*** ./build/src/GameWorld/test/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.testArea = void 0;\nconst loc1_1 = __webpack_require__(/*! ./loc1 */ \"./build/src/GameWorld/test/loc1.js\");\nconst loc2_1 = __webpack_require__(/*! ./loc2 */ \"./build/src/GameWorld/test/loc2.js\");\nconst item1_1 = __webpack_require__(/*! ./item1 */ \"./build/src/GameWorld/test/item1.js\");\nconst loc1 = new loc1_1.Loc1();\nconst loc2 = new loc2_1.Loc2();\nexports.testArea = {\n    Locations: {\n        loc1,\n        loc2,\n    },\n    Npcs: {},\n    Items: {\n        Item1: item1_1.Item1,\n    }\n};\n\n\n//# sourceURL=webpack://auris/./build/src/GameWorld/test/index.js?");

/***/ }),

/***/ "./build/src/GameWorld/test/item1.js":
/*!*******************************************!*\
  !*** ./build/src/GameWorld/test/item1.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Item1 = void 0;\nconst Item_1 = __importDefault(__webpack_require__(/*! ../../obj/Item */ \"./build/src/obj/Item.js\"));\nfunction item1() {\n    const i = new Item_1.default();\n    i.Name = \"jakis tam przedmiot\";\n    i.Description = \"to jest opis tego przedmiotu\";\n    i.X = 1;\n    return i;\n}\nexports.Item1 = item1();\n\n\n//# sourceURL=webpack://auris/./build/src/GameWorld/test/item1.js?");

/***/ }),

/***/ "./build/src/GameWorld/test/loc1.js":
/*!******************************************!*\
  !*** ./build/src/GameWorld/test/loc1.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Loc1 = void 0;\nconst Floors_1 = __webpack_require__(/*! ../../obj/Floors */ \"./build/src/obj/Floors.js\");\nconst Room_1 = __importDefault(__webpack_require__(/*! ../../obj/Room */ \"./build/src/obj/Room.js\"));\nconst item1_1 = __webpack_require__(/*! ./item1 */ \"./build/src/GameWorld/test/item1.js\");\nclass Loc1 extends Room_1.default {\n    constructor() {\n        super();\n        this.Name = \"lokacja testowa numer 1\";\n        this.Description = \"to jest po prostu lokacja testowa, wiec nie spodziewaj sie niczego niezwyklego\";\n        this.Floors = [\n            [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.none],\n            [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass],\n            [Floors_1.Floors.grass, Floors_1.Floors.stone, Floors_1.Floors.grass]\n        ];\n        this.AddObject(item1_1.Item1);\n    }\n}\nexports.Loc1 = Loc1;\n\n\n//# sourceURL=webpack://auris/./build/src/GameWorld/test/loc1.js?");

/***/ }),

/***/ "./build/src/GameWorld/test/loc2.js":
/*!******************************************!*\
  !*** ./build/src/GameWorld/test/loc2.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Loc2 = void 0;\nconst Room_1 = __importDefault(__webpack_require__(/*! ../../obj/Room */ \"./build/src/obj/Room.js\"));\nclass Loc2 extends Room_1.default {\n    constructor() {\n        super();\n        this.Name = \"lokacja druga testowa\";\n        this.Description = \"to jest druga testowa lokacja, wiec nie spodziewaj sie niczego \";\n    }\n}\nexports.Loc2 = Loc2;\n\n\n//# sourceURL=webpack://auris/./build/src/GameWorld/test/loc2.js?");

/***/ }),

/***/ "./build/src/obj/Floors.js":
/*!*********************************!*\
  !*** ./build/src/obj/Floors.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Floors = void 0;\nvar Floors;\n(function (Floors) {\n    Floors[\"stone\"] = \"STONE\";\n    Floors[\"grass\"] = \"GRASS\";\n    Floors[\"none\"] = \"NONE\";\n})(Floors = exports.Floors || (exports.Floors = {}));\n\n\n//# sourceURL=webpack://auris/./build/src/obj/Floors.js?");

/***/ }),

/***/ "./build/src/obj/GameObj.js":
/*!**********************************!*\
  !*** ./build/src/obj/GameObj.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass GameObj {\n    constructor() {\n        this._name = \"\";\n        this._desc = \"\";\n        this._x = 0;\n        this._y = 0;\n        this._ofens = 0;\n        this._defens = 0;\n        this._level = 0;\n        this._respawn = true;\n        this._use = undefined;\n        this._canPickup = false;\n    }\n    get Name() {\n        return this._name;\n    }\n    set Name(name) {\n        this._name = name;\n    }\n    get Description() {\n        return this._desc;\n    }\n    set Description(desc) {\n        this._desc = desc;\n    }\n    get X() {\n        return this._x;\n    }\n    set X(x) {\n        this._x = x;\n    }\n    get Y() {\n        return this._y;\n    }\n    set Y(y) {\n        this._y = y;\n    }\n    get Offensive() {\n        return this._ofens;\n    }\n    set Offensive(ofens) {\n        this._ofens = ofens;\n    }\n    get Defensive() {\n        return this._defens;\n    }\n    set Defensive(def) {\n        this._defens = def;\n    }\n    get Level() {\n        return this._level;\n    }\n    set Level(level) {\n        this._level = level;\n    }\n    get isRespawn() {\n        return this._respawn;\n    }\n    set Respawn(res) {\n        this._respawn = res;\n    }\n    getInfo() {\n        return 'no information';\n    }\n    get Use() {\n        return this._use;\n    }\n    get canPickup() {\n        return this._canPickup;\n    }\n    set canPickup(pickup) {\n        this._canPickup = pickup;\n    }\n}\nexports[\"default\"] = GameObj;\n\n\n//# sourceURL=webpack://auris/./build/src/obj/GameObj.js?");

/***/ }),

/***/ "./build/src/obj/Item.js":
/*!*******************************!*\
  !*** ./build/src/obj/Item.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst AreaManager_1 = __importDefault(__webpack_require__(/*! ../tools/AreaManager */ \"./build/src/tools/AreaManager.js\"));\nconst GameObj_1 = __importDefault(__webpack_require__(/*! ./GameObj */ \"./build/src/obj/GameObj.js\"));\nclass Item extends GameObj_1.default {\n    constructor() {\n        var _a;\n        super();\n        this._value = 0;\n        this._canPickup = true;\n        (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.setItem(this);\n    }\n    get Value() {\n        return this._value;\n    }\n    set Value(value) {\n        this._value = value;\n    }\n    getInfo() {\n        return `${this.Name}.\n     ${this.Description}.\n     ${this.Offensive}.\n     ${this.Defensive}.\n     ${this.Value}`;\n    }\n}\nexports[\"default\"] = Item;\n\n\n//# sourceURL=webpack://auris/./build/src/obj/Item.js?");

/***/ }),

/***/ "./build/src/obj/Mobile.js":
/*!*********************************!*\
  !*** ./build/src/obj/Mobile.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst random_1 = __webpack_require__(/*! ../random */ \"./build/src/random.js\");\nconst AreaManager_1 = __importDefault(__webpack_require__(/*! ../tools/AreaManager */ \"./build/src/tools/AreaManager.js\"));\nconst GameObj_1 = __importDefault(__webpack_require__(/*! ./GameObj */ \"./build/src/obj/GameObj.js\"));\nclass Mobile extends GameObj_1.default {\n    constructor() {\n        var _a;\n        super();\n        this._equipment = [];\n        this._hp = 100;\n        this._move = true;\n        this._canPickup = false;\n        (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.setMob(this);\n    }\n    get Equipment() {\n        return this._equipment;\n    }\n    addEquipment(...items) {\n        for (let element of items)\n            this.Equipment.push(element);\n    }\n    removeEquipment(item) {\n        let arr = [];\n        for (let element of this._equipment) {\n            if (element != item)\n                arr.push(element);\n        }\n        this._equipment = arr;\n    }\n    get HP() {\n        return this._hp;\n    }\n    set HP(hp) {\n        this._hp = hp;\n    }\n    get Move() {\n        return this._move;\n    }\n    set Move(mv) {\n        this._move = mv;\n    }\n    goNorth() {\n        if (this.Move)\n            if (this.Y < 2)\n                this.Y += 1;\n    }\n    goSouth() {\n        if (this.Move)\n            if (this.Y > 0)\n                this.Y -= 1;\n    }\n    goEast() {\n        if (this.Move)\n            if (this.X < 2)\n                this.X += 1;\n    }\n    goWest() {\n        if (this.Move)\n            if (this.X > 0)\n                this.X -= 1;\n    }\n    Update() {\n        if ((0, random_1.randomBoolean)()) {\n            switch ((0, random_1.randomInteger)(1, 4)) {\n                case 1:\n                    this.goNorth();\n                    break;\n                case 2:\n                    this.goEast();\n                    break;\n                case 3:\n                    this.goSouth();\n                    break;\n                case 4:\n                    this.goWest();\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n    getInfo() {\n        return `${this.Name}.\n${this.Description}.\nlevel: ${this.Level}`;\n    }\n}\nexports[\"default\"] = Mobile;\n\n\n//# sourceURL=webpack://auris/./build/src/obj/Mobile.js?");

/***/ }),

/***/ "./build/src/obj/Room.js":
/*!*******************************!*\
  !*** ./build/src/obj/Room.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst AreaManager_1 = __importDefault(__webpack_require__(/*! ../tools/AreaManager */ \"./build/src/tools/AreaManager.js\"));\nconst Floors_1 = __webpack_require__(/*! ./Floors */ \"./build/src/obj/Floors.js\");\nclass Room {\n    constructor() {\n        var _a;\n        this._name = \"\";\n        this._desc = \"\";\n        this._exits = {};\n        this._objects = [];\n        this._respawn = [];\n        this._floor = [[Floors_1.Floors.none, Floors_1.Floors.none, Floors_1.Floors.none],\n            [Floors_1.Floors.none, Floors_1.Floors.none, Floors_1.Floors.none],\n            [Floors_1.Floors.none, Floors_1.Floors.none, Floors_1.Floors.none]];\n        (_a = AreaManager_1.default.Instance) === null || _a === void 0 ? void 0 : _a.setLocation(this);\n    }\n    get Name() {\n        return this._name;\n    }\n    set Name(name) {\n        this._name = name;\n    }\n    get Description() {\n        return this._desc;\n    }\n    set Description(desc) {\n        this._desc = desc;\n    }\n    AddObject(...obj) {\n        for (let i of obj) {\n            this._objects.push(i);\n            if (i.isRespawn)\n                this._respawn.push(i);\n        }\n    }\n    get Objects() {\n        return this._objects;\n    }\n    getObject(x, y) {\n        let obj = [];\n        for (let element of this._objects) {\n            if (element.X === x && element.Y === y)\n                obj.push(element);\n        }\n        return obj;\n    }\n    removeObject(obj) {\n        let arr = [];\n        for (let element of this._objects) {\n            if (element != obj)\n                arr.push(element);\n        }\n        this._objects = arr;\n    }\n    get Floors() {\n        return this._floor;\n    }\n    set Floors(floor) {\n        if (floor.length != 3) {\n            throw new Error('invalid floors');\n        }\n        for (let fl of floor) {\n            if (fl.length != 3)\n                throw new Error('invalid element inside floors');\n        }\n        this._floor = floor;\n    }\n    getFloor(x, y) {\n        return this._floor[y][x];\n    }\n    get Exits() {\n        return this._exits;\n    }\n    set Exits(exit) {\n        this._exits = exit;\n    }\n    Update() {\n        for (let i of this._respawn) {\n            if (!this._objects.includes(i))\n                this.AddObject(Reflect.construct(i.constructor, []));\n        }\n    }\n}\nexports[\"default\"] = Room;\n\n\n//# sourceURL=webpack://auris/./build/src/obj/Room.js?");

/***/ }),

/***/ "./build/src/random.js":
/*!*****************************!*\
  !*** ./build/src/random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.randomBoolean = exports.randomFloat = exports.randomInteger = void 0;\nfunction randomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) + min);\n}\nexports.randomInteger = randomInteger;\nfunction randomFloat(min, max) {\n    return Math.random() * (max - min) + min;\n}\nexports.randomFloat = randomFloat;\nfunction randomBoolean() {\n    let rnd = Math.random() * (5 - 1) + 1;\n    return rnd <= 2.5;\n}\nexports.randomBoolean = randomBoolean;\n\n\n//# sourceURL=webpack://auris/./build/src/random.js?");

/***/ }),

/***/ "./build/src/setup.js":
/*!****************************!*\
  !*** ./build/src/setup.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst test_1 = __webpack_require__(/*! ./GameWorld/test */ \"./build/src/GameWorld/test/index.js\");\nconst Player_1 = __importDefault(__webpack_require__(/*! ./std/Player */ \"./build/src/std/Player.js\"));\nconst FOCUS = __importStar(__webpack_require__(/*! ./tools/Focus */ \"./build/src/tools/Focus.js\"));\nconst MainMenu_1 = __importDefault(__webpack_require__(/*! ./views/MainMenu */ \"./build/src/views/MainMenu.js\"));\nconst player = new Player_1.default();\nplayer.Room = test_1.testArea.Locations.loc1;\nFOCUS.ChangeView(new MainMenu_1.default());\nwindow.addEventListener('keydown', (event) => {\n    FOCUS.keyListener(event);\n});\n\n\n//# sourceURL=webpack://auris/./build/src/setup.js?");

/***/ }),

/***/ "./build/src/std/Player.js":
/*!*********************************!*\
  !*** ./build/src/std/Player.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Mobile_1 = __importDefault(__webpack_require__(/*! ../obj/Mobile */ \"./build/src/obj/Mobile.js\"));\nclass Player extends Mobile_1.default {\n    constructor() {\n        super();\n        this._exp = 0;\n        this._skillPoints = 100;\n        this._maxSkillPoints = 100;\n        this._maxHP = 100;\n        this._money = 0;\n        this._slots = {};\n        this._skills = {};\n        this.Respawn = false;\n        Player.Instance = this;\n    }\n    get Slots() {\n        return this._slots;\n    }\n    set Slots(slot) {\n        this._slots = slot;\n    }\n    get Experience() {\n        return this._exp;\n    }\n    set Experience(exp) {\n        this._exp = exp;\n    }\n    get SkillPoints() {\n        return this._skillPoints;\n    }\n    set SkillPoints(sp) {\n        this._skillPoints = sp;\n    }\n    get MaxSkillPoints() {\n        return this._maxSkillPoints;\n    }\n    set MaxSkillPoints(sp) {\n        this._maxSkillPoints = sp;\n    }\n    get MaxHP() {\n        return this._maxHP;\n    }\n    set MaxHP(mhp) {\n        this._maxHP = mhp;\n    }\n    get Money() {\n        return this._money;\n    }\n    set Money(money) {\n        this._money = money;\n    }\n    get Room() {\n        return this._actuallRoom;\n    }\n    set Room(room) {\n        this._actuallRoom = room;\n    }\n    get Skills() {\n        return this._skills;\n    }\n    Update() {\n        if (this.SkillPoints < this.MaxSkillPoints)\n            this.SkillPoints += 1;\n    }\n}\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack://auris/./build/src/std/Player.js?");

/***/ }),

/***/ "./build/src/tools/AreaManager.js":
/*!****************************************!*\
  !*** ./build/src/tools/AreaManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * this class store created Rooms, mobiles and items in game.\n * uses the map<> fields where the key is class name and value is object of this class\n */\nclass AreaManager {\n    constructor() {\n        this._locations = new Map();\n        this._items = new Map();\n        this._mobs = new Map();\n        AreaManager.Manager = this;\n    }\n    /**\n     * singleton pattern\n     */\n    static get Instance() {\n        return AreaManager.Manager;\n    }\n    getLocation(locationName) {\n        const location = this._locations.get(locationName);\n        if (location != undefined) {\n            return location;\n        }\n        else {\n            console.error('room not found');\n            return undefined;\n        }\n    }\n    setLocation(location) {\n        this._locations.set(location.constructor.name, location);\n    }\n    getItem(itemName) {\n        const item = this._items.get(itemName);\n        if (item) {\n            return item;\n        }\n        else {\n            console.error('item not found');\n            return undefined;\n        }\n    }\n    setItem(item) {\n        this._items.set(item.constructor.name, item);\n    }\n    getMob(mobName) {\n        const mob = this._mobs.get(mobName);\n        if (mob) {\n            return mob;\n        }\n        else {\n            console.error('mobile not found');\n            return undefined;\n        }\n    }\n    setMob(mob) {\n        this._mobs.set(mob.constructor.name, mob);\n    }\n}\nexports[\"default\"] = AreaManager;\n\n\n//# sourceURL=webpack://auris/./build/src/tools/AreaManager.js?");

/***/ }),

/***/ "./build/src/tools/Focus.js":
/*!**********************************!*\
  !*** ./build/src/tools/Focus.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.keyListener = exports.ChangeView = void 0;\nlet actualView;\nfunction ChangeView(view) {\n    actualView = view;\n}\nexports.ChangeView = ChangeView;\nfunction keyListener(key) {\n    actualView.Keyboard(key);\n}\nexports.keyListener = keyListener;\n\n\n//# sourceURL=webpack://auris/./build/src/tools/Focus.js?");

/***/ }),

/***/ "./build/src/tools/iterator.js":
/*!*************************************!*\
  !*** ./build/src/tools/iterator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Iterator {\n    constructor(arr) {\n        this._currentElement = undefined;\n        this._array = arr;\n        this._step = 0;\n    }\n    get CurrentStep() {\n        return this._step;\n    }\n    HasNext() {\n        if (this._step < this._array.length) {\n            return true;\n        }\n        return false;\n    }\n    Next() {\n        if (this.HasNext()) {\n            let element = this._array[this._step];\n            this._step += 1;\n            this._currentElement = element;\n            return element;\n        }\n        else {\n            throw new Error('the end of array');\n        }\n    }\n    Previous() {\n        if (this._step <= 0) {\n            throw new Error('the end of array');\n        }\n        if (this._step >= this._array.length) {\n            this._step = this._array.length;\n        }\n        this._step -= 1;\n        let element = this._array[this._step];\n        this._currentElement = element;\n        return element;\n    }\n    Reset() {\n        this._step = 0;\n    }\n    get CurrentElement() {\n        return this._currentElement;\n    }\n}\nexports[\"default\"] = Iterator;\n\n\n//# sourceURL=webpack://auris/./build/src/tools/iterator.js?");

/***/ }),

/***/ "./build/src/tools/speech.js":
/*!***********************************!*\
  !*** ./build/src/tools/speech.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Speech {\n    static say(text) {\n        Speech._utter.text = text;\n        Speech._utter.rate = Speech._rate;\n        Speech._utter.pitch = Speech._pitch;\n        Speech._synt.speak(Speech._utter);\n    }\n    static get Rate() {\n        return Speech._rate;\n    }\n    static set Rate(r) {\n        Speech._rate = r;\n    }\n    get Pitch() {\n        return Speech._pitch;\n    }\n    set Pitch(r) {\n        Speech._pitch = r;\n    }\n}\nexports[\"default\"] = Speech;\nSpeech._synt = window.speechSynthesis;\nSpeech._utter = new SpeechSynthesisUtterance();\nSpeech._rate = 1;\nSpeech._pitch = 1;\n\n\n//# sourceURL=webpack://auris/./build/src/tools/speech.js?");

/***/ }),

/***/ "./build/src/views/BaseMenu.js":
/*!*************************************!*\
  !*** ./build/src/views/BaseMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BaseMenu = void 0;\nconst speech_1 = __importDefault(__webpack_require__(/*! ../tools/speech */ \"./build/src/tools/speech.js\"));\nconst BaseView_1 = __importDefault(__webpack_require__(/*! ./BaseView */ \"./build/src/views/BaseView.js\"));\nclass BaseMenu extends BaseView_1.default {\n    constructor() {\n        super(...arguments);\n        this._menuPos = -1;\n        this._execute = undefined;\n        this._options = [];\n    }\n    Keyboard(key) {\n        switch (key.key) {\n            case \"ArrowDown\":\n                this._cursorDown();\n                break;\n            case \"ArrowUp\":\n                this._cursorUp();\n                break;\n            case \"Enter\":\n                this._run();\n                break;\n            default:\n                break;\n        }\n    }\n    _cursor(position) {\n        this._execute = position[1];\n        speech_1.default.say(position[0]);\n    }\n    _cursorDown() {\n        if (this._menuPos < this._options.length - 1) {\n            this._menuPos++;\n            this._cursor(this._options[this._menuPos]);\n        }\n    }\n    _cursorUp() {\n        if (this._menuPos > 0) {\n            this._menuPos--;\n            this._cursor(this._options[this._menuPos]);\n        }\n    }\n    _run() {\n        if (this._execute != undefined)\n            this._execute();\n    }\n}\nexports.BaseMenu = BaseMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/BaseMenu.js?");

/***/ }),

/***/ "./build/src/views/BaseView.js":
/*!*************************************!*\
  !*** ./build/src/views/BaseView.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst speech_1 = __importDefault(__webpack_require__(/*! ../tools/speech */ \"./build/src/tools/speech.js\"));\nclass BaseView {\n    constructor() {\n        this.say = speech_1.default.say;\n    }\n    Keyboard(key) {\n    }\n}\nexports[\"default\"] = BaseView;\n\n\n//# sourceURL=webpack://auris/./build/src/views/BaseView.js?");

/***/ }),

/***/ "./build/src/views/ContextMenu/BaseContextMenu.js":
/*!********************************************************!*\
  !*** ./build/src/views/ContextMenu/BaseContextMenu.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Focus_1 = __webpack_require__(/*! ../../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst BaseMenu_1 = __webpack_require__(/*! ../BaseMenu */ \"./build/src/views/BaseMenu.js\");\nclass BaseContextMenu extends BaseMenu_1.BaseMenu {\n    constructor(view, obj) {\n        super();\n        this._previousView = view;\n        this._obj = obj;\n        this.say(\"menu obiektu\");\n    }\n    Keyboard(key) {\n        switch (key.key) {\n            case \"Escape\":\n                this.backToPreviousView();\n                break;\n            default:\n                super.Keyboard(key);\n                break;\n        }\n    }\n    _run() {\n        super._run();\n        this.backToPreviousView();\n    }\n    backToPreviousView() {\n        this.say(\"zamykam menu\");\n        (0, Focus_1.ChangeView)(this._previousView);\n    }\n}\nexports[\"default\"] = BaseContextMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/ContextMenu/BaseContextMenu.js?");

/***/ }),

/***/ "./build/src/views/ContextMenu/ContextMenuFactory.js":
/*!***********************************************************!*\
  !*** ./build/src/views/ContextMenu/ContextMenuFactory.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Item_1 = __importDefault(__webpack_require__(/*! ../../obj/Item */ \"./build/src/obj/Item.js\"));\nconst Mobile_1 = __importDefault(__webpack_require__(/*! ../../obj/Mobile */ \"./build/src/obj/Mobile.js\"));\nconst ItemContextMenu_1 = __importDefault(__webpack_require__(/*! ./ItemContextMenu */ \"./build/src/views/ContextMenu/ItemContextMenu.js\"));\nconst MobContextMenu_1 = __importDefault(__webpack_require__(/*! ./MobContextMenu */ \"./build/src/views/ContextMenu/MobContextMenu.js\"));\n/**\n *  creates specific context menu for obj parameter\n * @param view - the view from which the function was called\n * @param obj  - object for which the context menu will be created\n * @returns  specific context menu : MobContext menu or ItemContext menu or undefined when obj will be not recognised\n */\nfunction createContextMenu(view, obj) {\n    if (obj instanceof Item_1.default) {\n        return new ItemContextMenu_1.default(view, obj);\n    }\n    if (obj instanceof Mobile_1.default) {\n        return new MobContextMenu_1.default(view, obj);\n    }\n    return undefined;\n}\nexports[\"default\"] = createContextMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/ContextMenu/ContextMenuFactory.js?");

/***/ }),

/***/ "./build/src/views/ContextMenu/ItemContextMenu.js":
/*!********************************************************!*\
  !*** ./build/src/views/ContextMenu/ItemContextMenu.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Player_1 = __importDefault(__webpack_require__(/*! ../../std/Player */ \"./build/src/std/Player.js\"));\nconst BaseContextMenu_1 = __importDefault(__webpack_require__(/*! ./BaseContextMenu */ \"./build/src/views/ContextMenu/BaseContextMenu.js\"));\nclass ItemContextMenu extends BaseContextMenu_1.default {\n    constructor(view, obj) {\n        super(view, obj);\n        this._options = [\n            [\"podnieś\", () => {\n                    var _a, _b;\n                    if (this._obj.canPickup) {\n                        (_b = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room) === null || _b === void 0 ? void 0 : _b.removeObject(this._obj);\n                    }\n                    else {\n                        this.say(\"tego nie morzna podnieść\");\n                    }\n                }],\n            [\"obejrzyj\", () => {\n                    const info = this._obj.getInfo();\n                    this.say(info);\n                }]\n        ];\n    }\n}\nexports[\"default\"] = ItemContextMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/ContextMenu/ItemContextMenu.js?");

/***/ }),

/***/ "./build/src/views/ContextMenu/MobContextMenu.js":
/*!*******************************************************!*\
  !*** ./build/src/views/ContextMenu/MobContextMenu.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst BaseContextMenu_1 = __importDefault(__webpack_require__(/*! ./BaseContextMenu */ \"./build/src/views/ContextMenu/BaseContextMenu.js\"));\nclass MobContextMenu extends BaseContextMenu_1.default {\n    constructor(view, obj) {\n        super(view, obj);\n        this._options = [\n            [\"atakuj\", () => {\n                    this.say(\"narazie atak został wyłączony\");\n                }],\n            [\"obejrzyj\", () => {\n                    const info = this._obj.getInfo();\n                    this.say(info);\n                }]\n        ];\n    }\n}\nexports[\"default\"] = MobContextMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/ContextMenu/MobContextMenu.js?");

/***/ }),

/***/ "./build/src/views/GameBoard.js":
/*!**************************************!*\
  !*** ./build/src/views/GameBoard.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst BaseView_1 = __importDefault(__webpack_require__(/*! ./BaseView */ \"./build/src/views/BaseView.js\"));\nconst iterator_1 = __importDefault(__webpack_require__(/*! ../tools/iterator */ \"./build/src/tools/iterator.js\"));\nconst Focus_1 = __webpack_require__(/*! ../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst ContextMenuFactory_1 = __importDefault(__webpack_require__(/*! ./ContextMenu/ContextMenuFactory */ \"./build/src/views/ContextMenu/ContextMenuFactory.js\"));\nconst Player_1 = __importDefault(__webpack_require__(/*! ../std/Player */ \"./build/src/std/Player.js\"));\nconst MiniMapView_1 = __importDefault(__webpack_require__(/*! ./MiniMapView */ \"./build/src/views/MiniMapView.js\"));\nclass GameBoard extends BaseView_1.default {\n    constructor() {\n        super();\n        this._cursor = { x: 0, y: 0 };\n        this._objIter = new iterator_1.default([]);\n        if (Player_1.default.Instance != undefined)\n            this._location = Player_1.default.Instance.Room;\n    }\n    cursor() {\n        this.say(this._collectionSummary());\n        if (this._objects != undefined)\n            this._objIter = new iterator_1.default(this._objects);\n    }\n    cursorUp() {\n        var _a;\n        if (this._cursor.y <= 1) {\n            this._cursor.y += 1;\n            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);\n            this.cursor();\n        }\n        else {\n            this.say(\"tam nie ma nic\");\n        }\n    }\n    cursorDown() {\n        var _a;\n        if (this._cursor.y > 0) {\n            this._cursor.y -= 1;\n            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);\n            this.cursor();\n        }\n        else {\n            this.say(\"tam nie ma nic\");\n        }\n    }\n    cursorLeft() {\n        var _a;\n        if (this._cursor.x > 0) {\n            this._cursor.x -= 1;\n            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);\n            this.cursor();\n        }\n        else {\n            this.say(\"tam nie ma nic\");\n        }\n    }\n    cursorRight() {\n        var _a;\n        if (this._cursor.x <= 1) {\n            this._cursor.x += 1;\n            this._objects = (_a = this._location) === null || _a === void 0 ? void 0 : _a.getObject(this._cursor.x, this._cursor.y);\n            this.cursor();\n        }\n        else {\n            this.say(\"tam nic nie ma\");\n        }\n    }\n    cursorTab() {\n        var _a, _b;\n        if (this._objects != undefined && this._objects.length > 0) {\n            if (this._objIter.HasNext()) {\n                this._selectedObject = this._objIter.Next();\n                if (((_a = this._selectedObject) === null || _a === void 0 ? void 0 : _a.Name) != undefined)\n                    this.say((_b = this._selectedObject) === null || _b === void 0 ? void 0 : _b.Name);\n            }\n            else {\n                this._objIter.Reset();\n                this.cursorTab();\n            }\n        }\n        else {\n            this.say(\"nic tu nie ma\");\n        }\n    }\n    execute() {\n        if (this._selectedObject)\n            (0, Focus_1.ChangeView)((0, ContextMenuFactory_1.default)(this, this._selectedObject));\n    }\n    exit() {\n        //new context menu z zapisz main menu i wroc do gry\n    }\n    Keyboard(key) {\n        switch (key.key) {\n            case \"m\":\n                this.openMinimap();\n                break;\n            case \"ArrowUp\":\n                this.cursorUp();\n                break;\n            case \"ArrowDown\":\n                this.cursorDown();\n                break;\n            case \"ArrowLeft\":\n                this.cursorLeft();\n                break;\n            case \"ArrowRight\":\n                this.cursorRight();\n                break;\n            case \"Enter\":\n                this.execute();\n                break;\n            case \"Escape\":\n                this.exit();\n                break;\n            case \"Tab\":\n                this.cursorTab();\n                break;\n            default:\n                super.Keyboard(key);\n                break;\n        }\n    }\n    _collectionSummary() {\n        var _a, _b;\n        let summary = '';\n        if (this._objects != undefined) {\n            if (this._objects.length > 0) {\n                summary = `\n${(_a = this._location) === null || _a === void 0 ? void 0 : _a.getFloor(this._cursor.x, this._cursor.y)}.\nObiekty: ${this._objects.length}`;\n            }\n            else {\n                summary = `\n    ${(_b = this._location) === null || _b === void 0 ? void 0 : _b.getFloor(this._cursor.x, this._cursor.y)}.\n`;\n            }\n        }\n        return summary;\n    }\n    openMinimap() {\n        (0, Focus_1.ChangeView)(new MiniMapView_1.default(this));\n    }\n}\nexports[\"default\"] = GameBoard;\n\n\n//# sourceURL=webpack://auris/./build/src/views/GameBoard.js?");

/***/ }),

/***/ "./build/src/views/MainMenu.js":
/*!*************************************!*\
  !*** ./build/src/views/MainMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst BaseMenu_1 = __webpack_require__(/*! ./BaseMenu */ \"./build/src/views/BaseMenu.js\");\nconst Focus_1 = __webpack_require__(/*! ../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst Options_1 = __importDefault(__webpack_require__(/*! ./Options/Options */ \"./build/src/views/Options/Options.js\"));\nconst GameBoard_1 = __importDefault(__webpack_require__(/*! ./GameBoard */ \"./build/src/views/GameBoard.js\"));\nclass MainMenu extends BaseMenu_1.BaseMenu {\n    constructor() {\n        super();\n        this.say(\"Menu Główne\");\n        this._options = [\n            [\"Graj\", () => {\n                    this.say(\"uruchamiam gre\");\n                    (0, Focus_1.ChangeView)(new GameBoard_1.default());\n                }],\n            [\"Opcje\", () => {\n                    (0, Focus_1.ChangeView)(new Options_1.default());\n                }],\n            [\"wyjście\", () => {\n                    window.close();\n                }]\n        ];\n    }\n}\nexports[\"default\"] = MainMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/MainMenu.js?");

/***/ }),

/***/ "./build/src/views/MiniMapView.js":
/*!****************************************!*\
  !*** ./build/src/views/MiniMapView.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Player_1 = __importDefault(__webpack_require__(/*! ../std/Player */ \"./build/src/std/Player.js\"));\nconst Focus_1 = __webpack_require__(/*! ../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst BaseView_1 = __importDefault(__webpack_require__(/*! ./BaseView */ \"./build/src/views/BaseView.js\"));\nclass MiniMapView extends BaseView_1.default {\n    constructor(board) {\n        var _a;\n        super();\n        this._location = (_a = Player_1.default.Instance) === null || _a === void 0 ? void 0 : _a.Room;\n        this._gameBoard = board;\n        this.cursor();\n    }\n    Keyboard(key) {\n        switch (key.key) {\n            case \"ArrowUp\":\n                this.cursorNorth();\n                break;\n            case \"ArrowDown\":\n                this.cursorSouth();\n                break;\n            case \"ArrowLeft\":\n                this.cursorWest();\n                break;\n            case \"ArrowRight\":\n                this.cursorEast();\n                break;\n            case \"Escape\":\n                this.close();\n                break;\n            default:\n                super.Keyboard(key);\n                break;\n        }\n    }\n    cursor() {\n        /*\n    if (this._location == Player.Instance?.Room) {\n        this.say(\"*\" + this._location!.Name)\n    } else {\n        this.say(this._location!.Name)\n    }\n    */\n        this.say(this._location.Name);\n    }\n    cursorNorth() {\n        var _a, _b;\n        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.north);\n    }\n    cursorSouth() {\n        var _a, _b;\n        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.south);\n    }\n    cursorWest() {\n        var _a, _b;\n        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.west);\n    }\n    cursorEast() {\n        var _a, _b;\n        this.isLocation((_b = (_a = this._location) === null || _a === void 0 ? void 0 : _a.Exits) === null || _b === void 0 ? void 0 : _b.east);\n    }\n    close() {\n        this.say(\"zamykam minimape\");\n        (0, Focus_1.ChangeView)(this._gameBoard);\n    }\n    isLocation(location) {\n        if (location) {\n            this._location = location;\n            this.cursor();\n        }\n        else {\n            this.say(\"brak\");\n        }\n    }\n}\nexports[\"default\"] = MiniMapView;\n\n\n//# sourceURL=webpack://auris/./build/src/views/MiniMapView.js?");

/***/ }),

/***/ "./build/src/views/Options/ChangeRate.js":
/*!***********************************************!*\
  !*** ./build/src/views/Options/ChangeRate.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Focus_1 = __webpack_require__(/*! ../../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst speech_1 = __importDefault(__webpack_require__(/*! ../../tools/speech */ \"./build/src/tools/speech.js\"));\nconst BaseView_1 = __importDefault(__webpack_require__(/*! ../BaseView */ \"./build/src/views/BaseView.js\"));\nconst OptionsSpeech_1 = __importDefault(__webpack_require__(/*! ./OptionsSpeech */ \"./build/src/views/Options/OptionsSpeech.js\"));\nclass ChangeRate extends BaseView_1.default {\n    constructor() {\n        super();\n        this._defaultRate = 1;\n        this._percentRate = (speech_1.default.Rate * 100) / 10;\n        this._helpInfo();\n    }\n    rateInfo() {\n        this.say(`prędkość: ${speech_1.default.Rate}`);\n    }\n    _helpInfo() {\n        this.say(\"strzałki lewo prawo zmieniają wartość, enter zapisuje i wraca do menu, escape anuluje.\");\n    }\n    Keyboard(key) {\n        switch (key.key) {\n            case \"ArrowRight\":\n                this._Faster();\n                break;\n            case \"ArrowLeft\":\n                this._slower();\n                break;\n            case \"Enter\":\n                this._accept();\n                break;\n            case \"Escape\":\n                this._cancel();\n                break;\n            default:\n                this._helpInfo();\n                break;\n        }\n    }\n    _Faster() {\n        this._percentRate++;\n        this.setRate(this._percentRate);\n        this.rateInfo();\n    }\n    _slower() {\n        this._percentRate--;\n        this.setRate(this._percentRate);\n        this.rateInfo();\n    }\n    _accept() {\n        (0, Focus_1.ChangeView)(new OptionsSpeech_1.default());\n    }\n    _cancel() {\n        speech_1.default.Rate = this._defaultRate;\n        (0, Focus_1.ChangeView)(new OptionsSpeech_1.default());\n    }\n    setRate(rate) {\n        speech_1.default.Rate = Math.round(10 * (rate / 100) * 10) / 10;\n    }\n}\nexports[\"default\"] = ChangeRate;\n\n\n//# sourceURL=webpack://auris/./build/src/views/Options/ChangeRate.js?");

/***/ }),

/***/ "./build/src/views/Options/Options.js":
/*!********************************************!*\
  !*** ./build/src/views/Options/Options.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst Focus_1 = __webpack_require__(/*! ../../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst BaseMenu_1 = __webpack_require__(/*! ../BaseMenu */ \"./build/src/views/BaseMenu.js\");\nconst MainMenu_1 = __importDefault(__webpack_require__(/*! ../MainMenu */ \"./build/src/views/MainMenu.js\"));\nconst OptionsSpeech_1 = __importDefault(__webpack_require__(/*! ./OptionsSpeech */ \"./build/src/views/Options/OptionsSpeech.js\"));\nclass Options extends BaseMenu_1.BaseMenu {\n    constructor() {\n        super();\n        this.say(\"opcje gry\");\n        this._options = [\n            [\"mowa\", () => {\n                    (0, Focus_1.ChangeView)(new OptionsSpeech_1.default());\n                }],\n            [\"powrót\", () => {\n                    (0, Focus_1.ChangeView)(new MainMenu_1.default());\n                    this.say(\"Menu Główne\");\n                }]\n        ];\n    }\n}\nexports[\"default\"] = Options;\n\n\n//# sourceURL=webpack://auris/./build/src/views/Options/Options.js?");

/***/ }),

/***/ "./build/src/views/Options/OptionsSpeech.js":
/*!**************************************************!*\
  !*** ./build/src/views/Options/OptionsSpeech.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst BaseMenu_1 = __webpack_require__(/*! ../BaseMenu */ \"./build/src/views/BaseMenu.js\");\nconst Focus_1 = __webpack_require__(/*! ../../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst MainMenu_1 = __importDefault(__webpack_require__(/*! ../MainMenu */ \"./build/src/views/MainMenu.js\"));\nconst ChangeRate_1 = __importDefault(__webpack_require__(/*! ./ChangeRate */ \"./build/src/views/Options/ChangeRate.js\"));\nclass OptionsSpeech extends BaseMenu_1.BaseMenu {\n    constructor() {\n        super();\n        this.say(\"opcje mowy\");\n        this._options = [\n            [\"szybkość mowy\", () => {\n                    (0, Focus_1.ChangeView)(new ChangeRate_1.default());\n                }],\n            [\"Wróć do menu\", () => {\n                    (0, Focus_1.ChangeView)(new MainMenu_1.default());\n                }]\n        ];\n    }\n}\nexports[\"default\"] = OptionsSpeech;\n\n\n//# sourceURL=webpack://auris/./build/src/views/Options/OptionsSpeech.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build/src/setup.js");
/******/ 	
/******/ })()
;