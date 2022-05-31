"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyListener = exports.ChangeView = void 0;
let actualView;
function ChangeView(view) {
    actualView = view;
}
exports.ChangeView = ChangeView;
function keyListener(key) {
    actualView.Keyboard(key);
}
exports.keyListener = keyListener;
