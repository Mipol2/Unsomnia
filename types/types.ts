export const possibleSymbolList = ["star", "square", "circle", "pentagon"] as const;
export type Symbol = typeof possibleSymbolList[number];

export interface ICard {
  symbol: Symbol;
}

export interface ICardWithID extends ICard {
  id: number;
}