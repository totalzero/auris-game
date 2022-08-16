import Item from "../../obj/Item";
import Weapon from "../../std/Weapon";

export class TestSword extends Weapon {
    constructor() {
        super()
        this.Name = "Srebrny miecz gryfona"
        this.Description = "jest to przepiękny srebrny miecz z rubinową rękojeścią, na klindze wygrawerowano napis *miecz gryfona*"
        this.MinDamage = 50
        this.MaxDamage = 100
        this.Value = 500
    }
}

export class TestSwordBlade extends Item {
    constructor() {
        super()
        this.Name = "Srebrna klinga"
        this.Description = "przepiękna srebrna klinga, brakuje jej tylko jakiejś rekojeści, aby posłurzyła jako miecz"
        this.X = 0
        this.Y = 1
this._combinations.set(TestSwordHilt, TestSword)
    }
}

export class TestSwordHilt extends Item {
    constructor() {
        super() 
        this.Name = "Rubinowa rękojeść"
        this.Description = "jest to przepiękna, wysadzana rubinami rękojeść miecza, niestety bez klingi. świata nią nie zawojujesz, chyba, rze znajdziesz brakujący element"
        this.X = 1
        this.Y = 0
        this._combinations.set(TestSwordBlade, TestSword)
    }
}