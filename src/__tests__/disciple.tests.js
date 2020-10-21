import Disciple from "../disciple"
import Witcher from "../witcher"

describe('[Class test - Disciple]', () => {
    const disciple = new Disciple("john")

    it('Is still alive', () => {
        expect(disciple.isStillAlive).toBeTruthy()
    })

    it('Eat one mushroom', () => {
        disciple.eatMushrooms()
        expect(disciple.mushroomsAte).toBe(1)
    })

    it('Do training session', () => {
        disciple.train()
        expect(disciple.trainingSessions).toBe(1)
    })

    it('Is trained', () => {
        expect(disciple.isTrained()).toBeTruthy()
    })

    it('Is still alive when you eat 4 mushrooms', () => {
        console.log = jest.fn()
        disciple.eatMushrooms()
        disciple.eatMushrooms()
        disciple.eatMushrooms()
        expect(disciple.isStillAlive).toBeFalsy()
        expect(console.log).toBeCalledTimes(1)
        expect(console.log).toBeCalledWith(`${disciple.name} screams and dies in agony.`)
    })

    it('Transform to witcher with efficiency', () => {
        const efficiencyExpected = disciple.mushroomsAte * disciple.trainingSessions
        const witcher = new Witcher(disciple)

        expect(witcher.efficiency).toBe(efficiencyExpected)
    })
})