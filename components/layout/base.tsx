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

export default function BaseLayout({
  children,
  showAccount,
}: {
  children?: JSX.Element;
  showAccount?: boolean;
}) {
  return (
    <Main>
      <Header showAccount={showAccount ?? false} />
      {children}
    </Main>
  );
}
