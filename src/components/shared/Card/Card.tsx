import React from "react";
import styled from "styled-components";
import Image from "next/image";
import imageNotFound from "../../../../public/image_empty_state.png";

export interface CardProps {
  image: string;
  title: string;
  authors: string[];
  publisher: string;
}

const Card = ({ image, title, authors, publisher }: CardProps) => {
  const handleImageError = image ? image : imageNotFound;

  return (
    <Container>
      <ImageContainer>
        <Image src={handleImageError} alt={title} width={168} height={200} />
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <Authors>
          <b>Authors:</b> J.K. Rowling, John Tiffany, Jack Thorne
        </Authors>
        <Publisher>{publisher}</Publisher>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => props.theme.spacing.space[44]};
`;

const ImageContainer = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.space[4]};
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes.sm};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  margin-bottom: ${(props) => props.theme.spacing.space[2]};
`;

const Authors = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes.sm};
  margin-bottom: ${(props) => props.theme.spacing.space[2]};
`;

const Publisher = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes.sm};
`;

export default Card;
