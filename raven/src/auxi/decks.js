import { Lands } from './ICard';
const createTravelCard = (land) => ({ land });
const createLandCard = (landOne, landTwo) => ({ landOne, landTwo });
export const createTravelDeck = () => {
    const arr = [];
    Object.keys(Lands).forEach((land, i) => {
        if (!isNaN(Number(land))) {
            for (let j = 0; j < 5; j++) {
                arr.push(createTravelCard(Lands[land]));
            }
        }
    });
    return { cards: arr };
};
export const createLandDeck = () => {
    const arr = [];
    Object.keys(Lands).forEach((land, i) => {
        if (!isNaN(Number(land))) {
            for (let j = 0; j < 2; j++) {
                arr.push(createLandCard(Lands[land], Lands[land]));
            }
            for (let j = i + 1; j < 5; j++) {
                arr.push(createLandCard(Lands[land], Lands[j.toString()]));
                arr.push(createLandCard(Lands[land], Lands[j.toString()]));
                arr.push(createLandCard(Lands[land], Lands[j.toString()]));
            }
        }
    });
    return { cards: arr };
};
