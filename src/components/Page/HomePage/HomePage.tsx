import React, { useState } from "react";
import useFetchBooks from "@hooks/useGetBooks";
import styled from "styled-components";
import SearchBar from "@components/shared/SearchBar";
import Card from "@components/shared/Card";
import EmptyState from "@components/shared/EmptyState";
import SkeletonCard from "@components/shared/SkeletonCard";
import { Item } from "../../../types/book.types";

const HomePage = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [readList, setReadList] = useState([{}]);

  const { books, searchingError, searching } = useFetchBooks(bookTitle);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleMessage = searchingError
    ? "No book found, please try again"
    : "What if you typed something in the search bar?";

  const renderEmptyState = () => {
    if (!searching && (searchingError || books.length === 0)) {
      return <EmptyState message={handleMessage} />;
    }
  };

  const renderLoadingState = () => {
    if (searching && !searchingError) {
      return [...new Array(5).keys()].map((item) => (
        <SkeletonCard key={item} />
      ));
    }
  };

  return (
    <Wrapper>
      <Container>
        <SearchBar handleChange={handlerChange} searchTitle={bookTitle} />
        {renderEmptyState()}
        <CardList>
          {renderLoadingState()}
          {books &&
            books
              .slice(0, 5)
              .map((book: Item) => (
                <Card
                  key={book?.id}
                  id={book?.id}
                  image={book?.volumeInfo?.imageLinks?.thumbnail}
                  title={book?.volumeInfo?.title}
                  publisher={book?.volumeInfo?.publisher}
                  authors={book?.volumeInfo?.authors}
                  setReadList={setReadList}
                />
              ))}
        </CardList>
        {readList.length > 0 && (
          <ReadingListContainer>
            <ReadingListTitle>My Reading List</ReadingListTitle>
            <CardList>
              {readList.length > 0 &&
                readList.map((book: any) => (
                  <Card
                    key={book?.id}
                    id={book?.id}
                    image={book?.image}
                    title={book?.title}
                    publisher={book?.publisher}
                    authors={book?.authors ? book?.authors : ""}
                    setReadList={setReadList}
                  />
                ))}
            </CardList>
          </ReadingListContainer>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.viewport.desktop};
  padding: ${(props) => props.theme.spacing.space[8]};
  @media (max-width: ${(props) => props.theme.viewport.tablet}) {
    padding: 0 ${(props) => props.theme.spacing.space[4]};
  }
`;
const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media (max-width: ${(props) => props.theme.viewport.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }
`;

const ReadingListContainer = styled.div`
  margin-top: ${(props) => props.theme.spacing.space[10]};
`;

const ReadingListTitle = styled.h2`
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  margin-bottom: ${(props) => props.theme.spacing.space[10]};
`;

export default HomePage;
