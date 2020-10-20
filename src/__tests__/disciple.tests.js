import Disciple from "../disciple";
import Witcher from "../witcher";

describe('[Class test - Disciple]', () => {
    const disciple = new Disciple("testDisciple")

    it('Is still alive', () => {
        expect(disciple.isStillAlive).toBeTruthy()
    })

    it('Eat one mushroom', () => {
        disciple.eatMushrooms()
        expect(disciple.mushroomsAte).toBe(1)
    })

    it('Do trainning session', () => {
        disciple.train()
        expect(disciple.trainingSessions).toBe(1)
    })

    it('Is trained', () => {
        expect(disciple.isTrained()).toBeTruthy()
    })

    it('Is still dead when you eat 4 mushrooms', () => {
        disciple.eatMushrooms()
        disciple.eatMushrooms()
        disciple.eatMushrooms()
        expect(disciple.isStillAlive).toBeFalsy()
    })

    it('Transform to witcher with efficiency', () => {
        const efficiencyExpected = disciple.mushroomsAte * disciple.trainingSessions
        const witcher = new Witcher(disciple)

        expect(witcher.efficiency).toBe(efficiencyExpected)
    })
})