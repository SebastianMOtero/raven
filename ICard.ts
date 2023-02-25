export enum Lands {
    Forest,
    Desert,
    Snow,
    Mountain,
    River,
}

export interface ILandsCard {
    landOne: Lands;
    landTwo: Lands;
}

export interface ILandsDeck {
    cards: ILandsCard[];
}

export interface ITravelCard {
    land: Lands;
}

export interface ITravelDeck {
    cards: ITravelCard[];
}