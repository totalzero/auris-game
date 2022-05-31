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

/***/ "./build/src/setup.js":
/*!****************************!*\
  !*** ./build/src/setup.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst FOCUS = __importStar(__webpack_require__(/*! ./tools/Focus */ \"./build/src/tools/Focus.js\"));\nconst MainMenu_1 = __importDefault(__webpack_require__(/*! ./views/MainMenu */ \"./build/src/views/MainMenu.js\"));\nFOCUS.ChangeView(new MainMenu_1.default());\nwindow.addEventListener('keydown', (event) => {\n    FOCUS.keyListener(event);\n});\n//const player = new Player()\n//player.Room = testArea.loc1\n\n\n//# sourceURL=webpack://auris/./build/src/setup.js?");

/***/ }),

/***/ "./build/src/tools/Focus.js":
/*!**********************************!*\
  !*** ./build/src/tools/Focus.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.keyListener = exports.ChangeView = void 0;\nlet actualView;\nfunction ChangeView(view) {\n    actualView = view;\n}\nexports.ChangeView = ChangeView;\nfunction keyListener(key) {\n    actualView.Keyboard(key);\n}\nexports.keyListener = keyListener;\n\n\n//# sourceURL=webpack://auris/./build/src/tools/Focus.js?");

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

/***/ "./build/src/views/MainMenu.js":
/*!*************************************!*\
  !*** ./build/src/views/MainMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst BaseMenu_1 = __webpack_require__(/*! ./BaseMenu */ \"./build/src/views/BaseMenu.js\");\nconst Focus_1 = __webpack_require__(/*! ../tools/Focus */ \"./build/src/tools/Focus.js\");\nconst Options_1 = __importDefault(__webpack_require__(/*! ./Options/Options */ \"./build/src/views/Options/Options.js\"));\nclass MainMenu extends BaseMenu_1.BaseMenu {\n    constructor() {\n        super();\n        this.say(\"Menu Główne\");\n        this._options = [\n            [\"Graj\", () => {\n                    this.say(\"uruchamiam gre\");\n                }],\n            [\"Opcje\", () => {\n                    (0, Focus_1.ChangeView)(new Options_1.default());\n                }],\n            [\"wyjście\", () => {\n                    window.close();\n                }]\n        ];\n    }\n}\nexports[\"default\"] = MainMenu;\n\n\n//# sourceURL=webpack://auris/./build/src/views/MainMenu.js?");

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