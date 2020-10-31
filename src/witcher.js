import {resistances} from './resistances'
import LivingThing from './livingThing'

class Witcher extends LivingThing {
  constructor(disciple) {
    super(disciple.name, resistances.SILVER, 10)

    this.efficiency = disciple.mushroomsAte * disciple.trainingSessions
    this.sword = resistances.STEEL
  }

  fight(livingThing) {
    if (this.sword === livingThing.resistance) {
      super.fight(livingThing, Math.ceil(this.efficiency / 2));
      this.toggleSwordType()
    } else {
      super.fight(livingThing, this.efficiency);
    }
  }

  toggleSwordType() {
    this.sword = this.sword === resistances.STEEL
          ? resistances.SILVER
          : resistances.STEEL;
  }
}

export default Witcher
