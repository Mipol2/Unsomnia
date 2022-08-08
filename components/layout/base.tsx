import Header from "../elements/header";
import { ReactNode } from "react";
import styled from "styled-components";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export default function BaseLayout({ children }: { children?: JSX.Element }) {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  );
}
