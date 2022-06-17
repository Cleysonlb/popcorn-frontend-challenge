import React from "react";
import styled from "styled-components";
import Image from "next/image";
import imageNotFound from "../../../../public/image_empty_state.png";
import useAddReadingList from "@hooks/useAddReadingList";

export interface CardProps {
  id: string;
  image: string | undefined;
  title: string | undefined;
  authors: string[];
  publisher: string | undefined;
}

const Card = ({ id, image, title, authors, publisher }: CardProps) => {
  const handleImageError = image ? image : imageNotFound;

  const book = {
    id,
    image,
    title,
    authors: authors.join(", "),
    publisher,
  };

  const { handlerFavourite, handlerToggle } = useAddReadingList(book);

  return (
    <Container>
      <ImageContainer>
        <Image src={handleImageError} alt={title} width={168} height={200} />
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <Authors>
          <b>Authors:</b>{" "}
          {typeof authors === "string" ? authors : authors.join(", ")}
        </Authors>
        <Publisher>{publisher}</Publisher>
      </Info>
      <Button handlerFavourite={handlerFavourite} onClick={handlerToggle}>
        {handlerFavourite ? "Remove from reading list" : "Add reading list"}
      </Button>
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
  height: ${(props) => props.theme.spacing.space[28]};
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

const Button = styled.button<{ handlerFavourite: boolean }>`
  border: 0 none;
  background-color: ${(props) =>
    props.handlerFavourite
      ? props.theme.colors.red[100]
      : props.theme.colors.green[100]};
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.space[3]};
  border-radius: ${(props) => props.theme.borderRadius.base};
  &:hover {
    background-color: ${(props) =>
      props.handlerFavourite
        ? props.theme.colors.red[200]
        : props.theme.colors.green[200]};
  }
`;

export default Card;
