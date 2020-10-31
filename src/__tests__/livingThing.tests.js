import LivingThing from "../livingThing";
import {resistances} from "../resistances";
import Fiend from "../fiend";

describe('[Class test - Living things]', () => {
    const fiend = new Fiend('FiendEnnemy')

    it('LivingThings fight', () => {
        const livingThing = new LivingThing('SimpleLivingThings', resistances.SILVER, 20)
        livingThing.fight(fiend, 10)

        const expectedHealthAfterFight = 10;
        expect(fiend.health).toBe(expectedHealthAfterFight)
    })

    it('LivingThings losts healths', () => {
        const livingThing = new LivingThing('SimpleLivingThings', resistances.SILVER, 20)
        livingThing.hitEnemy(4)

        const expectedHealthAfterFight = 16
        expect(livingThing.health).toBe(expectedHealthAfterFight)
    })

    it('LivingThings dead when it doesnt have healths', () => {
        const livingThing = new LivingThing('SimpleLivingThings', resistances.SILVER, 5)
        fiend.fight(livingThing)

        expect(livingThing.isAlive).toBeFalsy()
    })
})