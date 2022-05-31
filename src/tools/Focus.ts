import BaseView from "../views/BaseView";

let actualView: BaseView

export function ChangeView(view: BaseView) {
actualView = view    
}

export function keyListener(key: KeyboardEvent) {
 actualView.Keyboard(key)
}