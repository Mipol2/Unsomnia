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

const Spacer = styled.div`
  flex-grow: 1;
`;

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              <label htmlFor="password">Password</label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <button type="submit">Log In</button>
          </FormStyled>
          <p>
            Don&apos;t have an account yet? <a href="./register">Register</a>
          </p>
        </FormContainer>
      </Main>
    </BaseLayout>
  );
}
