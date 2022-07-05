import Item from "../obj/Item";
import { randomBoolean, randomInteger } from "../random";
import Monster from "../std/Monster";
import Player from "../std/Player";
import Attack from "./Attack";
import GameState from "./GameState";
import SoundManager from "./SoundManager";
import Speech from "./speech";

export default class ControlPlayer {
 private _player: Player   

 constructor() {
     this._player = Player!.Instance!
 }

Move(x: number, y: number) {

if (this.distanceFromPlayer(x, y) === 0) {
Speech.say("")
} else {
this.playSteps(this.distanceFromPlayer(x, y))
Speech.say(this.movingDescription(x, y))
this.goPoint(x, y)
GameState.startUpdate()

}

}

getItem(item: Item): boolean {
    if (item.canPickup) {
    this._player!.Room?.removeObject(item)
    this._player.addEquipment(item)
return true
    } else {
        return false
    }
}

Combat(mob: Monster): boolean  {
if (this.distanceFromPlayer(mob.X, mob.Y) > this._player.CombatDistance)     {
return false
}  else {
mob.Aggresive = true
const attackResult = Attack(this._player, mob)
if (attackResult) {
    GameState.startUpdate()
}

return attackResult
}
}

private goPoint(x: number, y: number) {
const distance = this.distanceFromPlayer(x, y)   

if (this._player.ActionPoints >= distance)    {
this._player.X = x
this._player.Y = y
this._player.ActionPoints -= distance
}
}

private movingDescription(x: number, y: number): string {
 const px = this._player.X   
 const py = this._player.Y

const distance = this.distanceFromPlayer(x, y)
if (this._player.ActionPoints < distance) {
return "za mało punktów ruchu"
}

const steps = (): string => {
    if (distance > 1) {
        return `idziesz ${distance} kroki na `
    } else {
        return "idziesz krok na "
    }
}

const direction = (): string => {
    if (y > py && x === px) {
        return "Północ"
    }

if (y < py && x === px) {
return "Południe"
}

if (x > px && y === py) {
    return "Wschód"
}

if (x < px && y === py) {
    return " Zachód"
}

if (y > py && x < px) {
    return "Północny-zachód"
}

if (y < py && x > px) {
    return "Południowy-Wschód"
}

if (y > py && x > px) {
    return "Północny-Wschód"
}

if (y < py && x < px) {
    return "Południowy-Zachód"
}
return "nieznany kierunek "
}
    
const result = steps() + direction()
 return result 
}

private distanceFromPlayer(x: number, y: number): number {
const X = this._player.X - x
const Y = this._player.Y - y
return Math.sqrt(X * X) + Math.sqrt(Y * Y)
}

private playSteps(step: number) {
    let arSteps: HTMLAudioElement[] = []

    for(let i = 0; i < step; i++) {
        arSteps.push(SoundManager.Effect.Steps[i])
    }
    let currentStep = 0

    const nextStep = function () {
        if (currentStep < step) {
                    arSteps[currentStep].addEventListener("ended", nextStep)
            arSteps[currentStep].play()
            currentStep ++
        }
    }
arSteps[currentStep].addEventListener("ended", nextStep)
arSteps[currentStep].play()
}

}