import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const rotate = keyframes`
    from {
        transform : rotate(0deg);
    }

    to {
        transform : rotate(360deg);
    }
`;

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${rotate} 2s linear infinite;
`;

export default function LoadingRotation() {
  return (
    <Main>
      <Container>
        <FontAwesomeIcon icon={faSpinner} size="lg" />
      </Container>
    </Main>
  );
}
