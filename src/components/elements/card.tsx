import styled from "styled-components";
import { Symbol } from "../../types/types";

interface ICardComponent {
  isHidden: boolean;
  isOpen: boolean;
}

const Main = styled.div<ICardComponent>`
  align-items: center;
  background-color: ${({ isOpen }) => (isOpen ? "#0784C5" : "#ffd35c")};
  display: flex;
  justify-content: center;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  height: 100%;
  width: 100%;
`;

export default function Card({
  shape,
  isOpen,
  isHidden,
  onClickFunction,
}: {
  shape: Symbol;
  isOpen: boolean;
  isHidden: boolean;
  onClickFunction: () => void;
}) {
  return (
    <Main onClick={onClickFunction} isHidden={isHidden} isOpen={isOpen}>
      {isOpen ? <p>{shape as string}</p> : <></>}
    </Main>
  );
}
