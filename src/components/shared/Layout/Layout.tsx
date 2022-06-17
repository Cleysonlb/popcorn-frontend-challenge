import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { GiBookCover } from "react-icons/gi";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header>
      <Link shallow href="/" as={"/"}>
        <LogoContainer>
          <GiBookCover data-testid="logo-icon" size="1.875rem" />
          <LogoText>Popcorn books</LogoText>
        </LogoContainer>
      </Link>
    </Header>
    {children}
  </Container>
);

const Container = styled.div``;
const Header = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.viewport.desktop};
  padding: ${(props) => props.theme.spacing.space[8]} 0;
`;
const LogoContainer = styled.a`
  font-family: ${(props) => props.theme.typography.fonts.poppins};
  display: flex;
  align-items: center;
`;
const LogoText = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes["2xl"]};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  margin-left: ${(props) => props.theme.spacing.space[4]};
`;

export default Layout;
