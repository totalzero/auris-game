"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("./random");
function Attack(mob1, mob2) {
    blow(mob1, mob2);
    if (mob2.HP > 0)
        blow(mob2, mob1);
}
exports.default = Attack;
function blow(attacker, opponent) {
    if (attacker.Offensive > opponent.Defensive) {
        const strengthOfAttack = attacker.Offensive - opponent.Defensive;
        opponent.HP -= (0, random_1.randomInteger)(1, strengthOfAttack);
    }
}
