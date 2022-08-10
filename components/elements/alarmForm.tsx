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
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  useEffect(() => {
    if (parseInt(hour) >= 24 || parseInt(hour) < 0) {
      setHour("0");
    }
  }, [hour]);

  useEffect(() => {
    if (parseInt(minute) >= 60 || parseInt(minute) < 0) {
      setMinute("0");
    }
  }, [minute]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const createdAlarm = {
      Title: title,
      Description: description,
      Hour: parseInt(hour),
      Minute: parseInt(minute),
      Difficulty: urgency,
    } as Alarm;

    functionToSubmit(createdAlarm);
  }

  return (
    <Main>
      <FormStyled onSubmit={(e) => handleSubmit(e)}>
        <InputContainer>
          <label htmlFor="alarmName">Title</label>
          <input
            id="alarmName"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="alarmDescription">Description</label>
          <input
            id="alarmDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputContainer>
        <RadioContainer>
          <p>Urgency</p>
          <Spacer />
          <RadioContainer>
            <button type="button" onClick={() => setUrgency("low")}>
              Low
            </button>
            <button type="button" onClick={() => setUrgency("med")}>
              Med
            </button>
            <button type="button" onClick={() => setUrgency("high")}>
              High
            </button>
          </RadioContainer>
        </RadioContainer>
        <InputContainer>
          <label htmlFor="alarmHour">Title</label>
          <input
            id="alarmHour"
            type="number"
            min="0"
            max="24"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="alarmMinute">Title</label>
          <input
            id="alarmMinute"
            type="number"
            min="0"
            max="60"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
          />
        </InputContainer>
        <button type="submit">Create Alarm</button>
      </FormStyled>
    </Main>
  );
}
