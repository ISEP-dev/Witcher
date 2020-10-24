import Monster from "./monster"

class Fiend extends Monster {
    constructor(name) {
        super(name, 20);
    }

    fight(livingThing) {
        livingThing.health -= 5
        if (livingThing.health <= 0) {
            livingThing.isAlive = false
        }
    }
}

export default Fiend