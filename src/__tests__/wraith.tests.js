import Fiend from "../fiend";
import Wraith from "../wraith";

describe("[Class test - Wraith]", () => {
    const fiend = new Fiend('Fiend')

    it('When Wraith is hit one time, he becomes immune and lost health points', () => {
        const wraith = new Wraith('Wraith')

        fiend.fight(wraith)
        expect(wraith.isImmune).toBeTruthy()

        const expectedHealthAfterOneHit = 5
        expect(wraith.health).toBe(expectedHealthAfterOneHit)
    })

    it('When Wraith is hit twice, he can be hit', () => {
        const wraith = new Wraith('Wraith')

        fiend.fight(wraith)
        fiend.fight(wraith)
        expect(wraith.isImmune).toBeFalsy()
        const expectedHealthAfterTwoHit = 5
        expect(wraith.health).toBe(expectedHealthAfterTwoHit)
    })
})