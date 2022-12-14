import styled from "styled-components";

import { Alarm } from "../../types/types";

const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export default function AlarmComponent({
  alarm: {
    Title: title,
    Description: description,
    Difficulty: urgency,
    Minute: minute,
    Hour: hour,
  },
  functionToDelete,
}: {
  alarm: Alarm;
  functionToDelete: () => void;
}) {
  return (
    <Main>
      <TitleContainer>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </TitleContainer>
      <Spacer />
      <InfoContainer>
        <h3>
          {hour}.{minute}
        </h3>
        <h4>{urgency}</h4>
      </InfoContainer>
      <button onClick={functionToDelete}>Delete</button>
    </Main>
  );
}
