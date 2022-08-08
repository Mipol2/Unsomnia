export const possibleSymbolList = ["star", "square", "circle", "pentagon"] as const;
export type Symbol = typeof possibleSymbolList[number];

export interface ICard {
  symbol: Symbol;
}

export interface ICardWithID extends ICard {
  id: number;
}

const possibleUrgencyList = ["low", "med", "high"] as const;
export type Urgency = typeof possibleUrgencyList[number];

export interface Alarm {
    id : number,
    title : string,
    description : string,
    urgency : Urgency,
    hour : number,
    minute : number
}