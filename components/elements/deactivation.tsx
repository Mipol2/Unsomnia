import styled from "styled-components";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Deactivation({
  hour,
  minute,
}: {
  hour: number;
  minute: number;
}) {
  return (
    <Main>
      <p>
        Alarm at {hour}.{minute}
      </p>
      <p>Deactivated</p>
    </Main>
  );
}
