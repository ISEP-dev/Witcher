import Witcher from "../witcher";
import Wraith from "../wraith";
import Disciple from "../disciple";
import Fiend from "../fiend";

describe("[Class test - Witcher]", () => {
    const disciple = new Disciple("StrongDisciple");
    disciple.eatMushrooms()
    disciple.eatMushrooms()
    disciple.train()
    const witcher = new Witcher(disciple)

    it('Witcher efficiency equals disciple ate mushrooms * disciple did training sessions', () => {
        const witcher = new Witcher(disciple)

        const expectedEfficiency = disciple.mushroomsAte * disciple.trainingSessions
        expect(witcher.efficiency).toBe(expectedEfficiency)
    })

    it('Witcher fight a living thing with silver resistance', () => {
        const livingThingsWithSilverResistance = new Witcher(disciple)

        const witcher = new Witcher(disciple)
        witcher.fight(livingThingsWithSilverResistance)

        const expectedHealth = 8
        expect(livingThingsWithSilverResistance.health).toBe(expectedHealth)
    })


    it('Witcher fight a living thing with steel resistance', () => {
        const livingThingsWithSteelResistance = new Fiend('Fiend')
        witcher.fight(livingThingsWithSteelResistance)

        const expectedHealthAfterOneHitAgainstWraith = 19
        expect(livingThingsWithSteelResistance.health).toBe(expectedHealthAfterOneHitAgainstWraith)

        witcher.fight(livingThingsWithSteelResistance)

        const expectedHealthAfterTwoHitAgainstWraith = 17
        expect(livingThingsWithSteelResistance.health).toBe(expectedHealthAfterTwoHitAgainstWraith)
    })
})