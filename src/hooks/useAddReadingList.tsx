import { useEffect, useState } from "react";

export interface Book {
  id: string;
  image: string | undefined;
  title: string | undefined;
  authors: string[] | string | undefined;
  publisher: string | undefined;
}

const useAddReadingList = (book: Book) => {
  const storageKey = "readingList";
  const [handlerFavourite, setHandlerFavourite] = useState<boolean>(false);

  const getStorage = () => {
    let itemsFromStorage = [];
    if (typeof window !== "undefined") {
      try {
        let storageData = localStorage.getItem(storageKey);
        if (storageData) {
          itemsFromStorage = JSON.parse(storageData);
        }
      } catch (err) {
        // Error
      }
    }
    return itemsFromStorage;
  };

  const putStorage = (items: Book[]) => {
    const parsedStorage = JSON.stringify(items);

    localStorage.setItem(storageKey, parsedStorage);
  };

  useEffect(() => {
    const itemsFromStorage = getStorage();
    let favouriteIncluded =
      itemsFromStorage.filter((b: Book) => b.id === book.id).length > 0;
    setHandlerFavourite(favouriteIncluded);
  }, []);

  const handlerToggle = () => {
    const itemsFromStorage = getStorage();
    const isFavouriteIncluded =
      itemsFromStorage.filter((b: Book) => b.id === book.id).length > 0;
    let newStorage = [];

    if (isFavouriteIncluded) {
      newStorage = itemsFromStorage.filter((item: Book) => item.id !== book.id);
      putStorage(newStorage);
      setHandlerFavourite(false);
    } else {
      newStorage = [book, ...itemsFromStorage];
      putStorage(newStorage);
      setHandlerFavourite(true);
    }
  };

  return { getStorage, handlerFavourite, handlerToggle };
};

export default useAddReadingList;
