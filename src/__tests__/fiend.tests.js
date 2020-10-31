import Fiend from "../fiend";
import Monster from "../monster";
import Wraith from "../wraith";

describe("[Class test - Fiend]", () => {
    it('Fiend fight a monster', () => {
        const fiend = new Fiend('Fiend')
        const monster = new Monster('Big Monster', 25)
        fiend.fight(monster)

        const expectedHealthAfterFiendHit = 20;
        expect(monster.health).toBe(expectedHealthAfterFiendHit)
    })


    it('Fiend is hit by a Wraith', () => {
        const wraith = new Wraith('Wraith')
        const fiend = new Fiend('Fiend')
        wraith.fight(fiend)

        const expectedHealthAfterFight = 18;
        expect(fiend.health).toBe(expectedHealthAfterFight)
    })

})