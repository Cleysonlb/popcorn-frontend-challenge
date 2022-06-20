import React from "react";
import emptyStateIllustration from "@assets/green_cat.svg";
import Image from "next/image";
import styled from "styled-components";

export interface emptyStateProps {
  message: string;
}

const EmptyState = ({ message }: emptyStateProps) => {
  return (
    <Container>
      <EmptyStateImage
        src={emptyStateIllustration}
        alt="Green Cat"
        width={200}
        height={200}
      />
      <EmptyStateText>{message}</EmptyStateText>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.viewport.desktop};
  padding: ${(props) => props.theme.spacing.space[8]} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyStateImage = styled(Image)`
  animation: spin 4s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EmptyStateText = styled.h4`
  font-family: ${(props) => props.theme.typography.fonts.poppins};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
`;

export default EmptyState;
