import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hello Next.js</h1>
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.5rem;
`;

export default Home;
