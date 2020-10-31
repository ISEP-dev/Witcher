class LivingThing {
    constructor(name, resistance, health) {
        this.name = name
        this.resistance = resistance
        this.isAlive = true
        this.health = health
    }

    hitEnemy(damage) {
        this.health -= damage
    }

    fight(livingThing, damage) {
        livingThing.hitEnemy(damage)

        if (livingThing.health <= 0) {
            livingThing.isAlive = false
        }
    }
}

export default LivingThing
