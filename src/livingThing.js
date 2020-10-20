class LivingThing {
  constructor(name, resistance, health) {
    this.name = name
    this.resistance = resistance
    this.isAlive = true
    this.health = health
  }

  fight(livingThing) {
    livingThing.health -= 2

    if (livingThing.health <= 0) {
      livingThing.isAlive = false
    }
  }
}

export default LivingThing
