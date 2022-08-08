import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Main = styled.div`
  align-items: center;
  background-color: #00537a;
  color: white;
  display: flex;
  justify-content: center;
  padding: 0 1em;
  width: 100%;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export default function Header({ showAccount }: { showAccount: boolean }) {
  return (
    <Main>
      <h1>Unsomnia</h1>
      <Spacer />
      {/* <FontAwesomeIcon icon={faCircleUser} fontSize={"2em"} /> */}
      {showAccount ? (
        <FontAwesomeIcon icon={faCircleUser} fontSize={"2em"} />
      ) : null}
    </Main>
  );
}
