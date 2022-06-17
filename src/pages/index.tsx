import type { NextPage } from "next";
import styled from "styled-components";
import HomePage from "@components/Page/HomePage";

const Home: NextPage = () => {
  return (
    <Container>
      <HomePage />
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.5rem;
`;

export default Home;
