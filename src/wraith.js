import Monster from "./monster"

class Wraith extends Monster {

    constructor(name) {
        super(name, 10);
        this.isImmune = false
    }

    hitEnemy(damage) {
        if (!this.isImmune) {
            super.hitEnemy(damage)
        }
        this.isImmune = !this.isImmune
    }

    fight(livingThing) {
        super.fight(livingThing, 2);
    }
}

export default Wraith