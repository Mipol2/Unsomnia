import { ICardWithID } from "../types/types";

export function shuffleArray<ElementType>(array : ElementType[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array 
}

export function checkIfSameShape (openedCards : ICardWithID[]) {
    return openedCards.every((card) => 
        card.symbol === openedCards[0].symbol
    )
}
