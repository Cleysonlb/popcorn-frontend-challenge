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

  const { books, searchingError, searching } = useFetchBooks(bookTitle);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  const handleMessage = searchingError
    ? "No book found, please try again"
    : "What if you typed something in the search bar?";

  console.log(searchingError);

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
                />
              ))}
        </CardList>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.viewport.desktop};
`;
const CardList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default HomePage;
