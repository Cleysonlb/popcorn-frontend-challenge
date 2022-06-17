import React, { useState } from "react";
import useFetchBooks from "@hooks/useGetBooks";

const HomePage = () => {
  const [bookTitle, setBookTitle] = useState("");

  const { books } = useFetchBooks(bookTitle);

  console.log(books);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookTitle(e.target.value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <input type="text" value={bookTitle} onChange={handlerChange} />
    </div>
  );
};

export default HomePage;
