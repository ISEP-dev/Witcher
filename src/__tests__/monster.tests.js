import Monster from "../monster";
import {resistances} from "../resistances";

describe('[Class test - Monster]', () => {

    it('Monster has a steel resistance', () => {
        const monster = new Monster('SimpleMonster', 2)
        expect(monster.resistance).toBe(resistances.STEEL)
    })
})