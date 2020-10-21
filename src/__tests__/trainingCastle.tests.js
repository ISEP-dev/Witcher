import TrainingCastle from "../trainingCastle"

describe('[Class test - Training Castle]', () => {
    const trainingCastle = new TrainingCastle()

    it('Accept new disciples', () => {
        trainingCastle.acceptNewDisciple('john')
        trainingCastle.acceptNewDisciple('jesse')

        expect(trainingCastle.disciples.length).toBe(2)
    })

    it('Each disciple eat mushrooms', () => {
        trainingCastle.eatMushrooms()
        const numberOfDiscipleAteMushrooms = trainingCastle.disciples.filter(d => d.mushroomsAte === 1).length

        expect(numberOfDiscipleAteMushrooms).toBe(trainingCastle.disciples.length)
    })

    it('Each disciple make a training session', () => {
        trainingCastle.trainDisciples()
        const numberOfDiscipleMakeTrainingSession = trainingCastle.disciples
            .filter(d => d.trainingSessions === 1).length

        expect(numberOfDiscipleMakeTrainingSession).toBe(trainingCastle.disciples.length)
    })




})