import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/elements/header";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import BaseLayout from "../components/layout/base";

const Container = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Container>
        <h2>Insomnia?</h2>
        <h3>We can help with that</h3>
        <button>Join Now</button>
      </Container>
    </BaseLayout>
  );
};

export default Home;
