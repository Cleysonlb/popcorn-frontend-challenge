import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBooks = (bookTitle: string) => {
  const [books, setBooks] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchingError, setSearchingError] = useState(false);

  const minLength = bookTitle.trim().length > 3;

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  useEffect(() => {
    if (!minLength) {
      setSearchingError(false);
      setSearching(false);
      setBooks(null);
      return;
    }
    setSearchingError(false);
    setSearching(true);

    const debounceHandler = setTimeout(async () => {
      try {
        const response = await axios.get(
          `${appUrl}/api/books?title=${bookTitle}`
        );
        setBooks(response.data.items);
        if (response.data.totalItems === 0) {
          setBooks([]);
          setSearchingError(true);
          setSearching(false);
        } else {
          setSearching(false);
          setBooks(response.data.items);
        }
      } catch (error) {
        setBooks([]);
        setSearchingError(true);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [bookTitle]);

  return { books, searching, searchingError };
};

export default useFetchBooks;
