import React from "react";
import styled from "styled-components";

const SkeletonCard = () => {
  return <Wrapper data-testid="skeleton"></Wrapper>;
};

const Wrapper = styled.div`
  max-width: 154px;
  width: 100%;
  height: 240px;
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background: ${(props) => props.theme.gradients.gray};
  @media (--desktop) {
    max-width: 180px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.gradients.gray};
    animation: loading 1s infinite linear;
  }

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }
`;

export default SkeletonCard;
