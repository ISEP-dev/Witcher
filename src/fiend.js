import Monster from "./monster"

class Fiend extends Monster {
    constructor(name) {
        super(name, 20);
    }

    fight(livingThing) {
        super.fight(livingThing, 5)
    }
}

export default Fiend