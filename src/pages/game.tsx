import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Card from "../components/elements/card";
import { ICard, ICardWithID, possibleSymbolList } from "../types/types";
import { checkIfSameShape, shuffleArray } from "../utils/utilities";

const Main = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  padding: 1rem;
  width: 100%;
`;

const Division = styled.div`
  background-color: #ffd35c;
  height: 100%;
  width: 100%;
`;

const cardArray = shuffleArray<ICard>(
  possibleSymbolList
    .map((symbol) => {
      return Array.from({ length: 4 }, (_, i) => {
        return {
          symbol,
        } as ICard;
      });
    })
    .reduce((accumulatedArray: ICard[], arrayToMerge: ICard[]) => {
      return [...accumulatedArray, ...arrayToMerge];
    })
).map((card, i) => {
  return { ...card, id: i } as ICardWithID;
});

export default function GamePage() {
  const [hydrated, setHydrated] = useState(false);
  const suspendClicking = useRef(false);
  const [openedCard, setOpenedCard] = useState([] as ICardWithID[]);
  const hiddenCard = useRef([] as ICardWithID[]);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (openedCard.length === 4) {
      suspendClicking.current = true;
      setTimeout(() => {
        if (checkIfSameShape(openedCard)) {
          hiddenCard.current = [...hiddenCard.current, ...openedCard];
        }
        setOpenedCard([] as ICardWithID[]);
        suspendClicking.current = false;
      }, 1000);
    }
  }, [openedCard]);

  if (!hydrated) {
    return null;
  }

  return (
    <Main>
      {cardArray.map(({ id, symbol }: ICardWithID) => {
        const isOpen = openedCard.some((card) => card.id === id);
        const isHidden = hiddenCard.current.some((card) => card.id === id);
        return (
          <Card
            isHidden={isHidden}
            key={id}
            isOpen={isOpen}
            shape={symbol}
            onClickFunction={() => {
              if (isOpen || suspendClicking.current || isHidden) {
                return;
              }
              setOpenedCard((prevOpenedCard) => {
                return [...prevOpenedCard, { id, symbol }];
              });
            }}
          />
        );
      })}
    </Main>
  );
}
