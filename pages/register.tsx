import { FormEvent, useState } from "react";
import styled from "styled-components";
import BaseLayout from "../components/layout/base";

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

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkerPassword, setCheckerPassword] = useState("");

  function handleRegister(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <BaseLayout>
      <Main>
        <FormContainer>
          <FormStyled onSubmit={(e) => handleRegister(e)}>
            <InputContainer>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="checkerPassword">Repeat Password</label>
              <input
                id="checkerPassword"
                value={checkerPassword}
                onChange={(e) => setCheckerPassword(e.target.value)}
              />
            </InputContainer>
            <button type="submit">Register</button>
          </FormStyled>
          <p>
            Already have an account? <a href="./login">Log In</a>
          </p>
        </FormContainer>
      </Main>
    </BaseLayout>
  );
}
