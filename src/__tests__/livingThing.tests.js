import Disciple from "../disciple";
import Witcher from "../witcher";
import Monster from "../monster";

describe('[Class test - Living things]', () => {
    const hero = new Disciple('Hero1')
    hero.eatMushrooms()
    hero.train()
    const witcher = new Witcher(hero)

    it('Fight a monster', () => {
        const monster = new Monster('You', 2)
        witcher.fight(monster)

        expect(monster.isAlive).toBeFalsy()
    })

})