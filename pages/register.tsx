import { FormEvent, useState } from "react";
import styled from "styled-components";

const Main = styled.div``;

const FormContainer = styled.div`
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

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkerPassword, setCheckerPassword] = useState("");

  function handleRegister(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Main>
      <FormStyled onSubmit={(e) => handleRegister(e)}>
        <InputContainer>
          <label htmlFor="username">Title</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="email">Description</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Title</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="checkerPassword">Description</label>
          <input
            id="checkerPassword"
            value={checkerPassword}
            onChange={(e) => setCheckerPassword(e.target.value)}
          />
        </InputContainer>
        <button type="submit">Create Alarm</button>
      </FormStyled>
    </Main>
  );
}
