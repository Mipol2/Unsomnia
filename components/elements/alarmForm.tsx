import styled from "styled-components";
import { FormEvent, useEffect, useState } from "react";
import { Alarm, Urgency } from "../../types/types";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormStyled = styled.form``;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const RadioContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

export default function AlarmForm({
  functionToSubmit,
}: {
  functionToSubmit: (arg1: Alarm) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("low" as Urgency);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    if (hour >= 24 || hour < 0) {
      setHour(0);
    }
  }, [hour]);

  useEffect(() => {
    if (minute >= 60 || minute < 0) {
      setMinute(0);
    }
  }, [minute]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const createdAlarm = {
      id: 90,
      title,
      description,
      hour,
      minute,
      urgency,
    } as Alarm;

    functionToSubmit(createdAlarm);
  }

  return (
    <Main>
      <FormStyled onSubmit={(e) => handleSubmit(e)}>
        <InputContainer>
          <label htmlFor="alarmName">Title</label>
          <input id="alarmName" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="alarmDescription">Description</label>
          <input id="alarmDescription" />
        </InputContainer>
        <RadioContainer>
          <p>Urgency</p>
          <Spacer />
          <RadioContainer>
            <button onClick={() => setUrgency("low")}>Low</button>
            <button onClick={() => setUrgency("med")}>Med</button>
            <button onClick={() => setUrgency("high")}>High</button>
          </RadioContainer>
        </RadioContainer>
        <InputContainer>
          <label htmlFor="alarmHour">Title</label>
          <input id="alarmHour" type="number" min="0" max="24" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="alarmMinute">Title</label>
          <input id="alarmMinute" type="number" min="0" max="60" />
        </InputContainer>
        <button type="submit">Create Alarm</button>
      </FormStyled>
    </Main>
  );
}
