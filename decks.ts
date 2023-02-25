import { ILandsCard, ILandsDeck, ITravelCard, ITravelDeck, Lands } from './ICard';

const createTravelCard = (land: Lands): ITravelCard => ({ land });

const createLandCard = (landOne: Lands, landTwo: Lands): ILandsCard => ({ landOne, landTwo });

export const createTravelDeck = (): ITravelDeck => {
    const arr = []

    Object.keys(Lands).forEach((land, i) => {
        if (!isNaN(Number(land))) {
            for (let j = 0; j < 5; j++) {
                arr.push(createTravelCard(Lands[land]))
            }
        }
    })

    return { cards: arr } as unknown as ITravelDeck;
}

export const createLandDeck = (): ILandsDeck => {
    const arr = []

    Object.keys(Lands).forEach((land, i) => {
        if (!isNaN(Number(land))) {
            for (let j = 0; j < 2; j++) {
                arr.push(createLandCard(Lands[land], Lands[land]))
            }

            for (let j = i + 1; j < 5; j++) {
                arr.push(createLandCard(Lands[land], Lands[j.toString()]))
                arr.push(createLandCard(Lands[land], Lands[j.toString()]))
                arr.push(createLandCard(Lands[land], Lands[j.toString()]))
            }
        }
    })

    return { cards: arr } as unknown as ILandsDeck;
}