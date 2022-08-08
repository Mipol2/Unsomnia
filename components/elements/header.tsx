import styled from "styled-components";

const Main = styled.div`
  background-color: #00537a;
  color: white;
  display: grid;
  padding: 0 1em;
  width: 100%;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export default function Header() {
  return (
    <Main>
      <h1>Unsomnia</h1>
      <Spacer />
    </Main>
  );
}
