import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { Books } from "../../types/book.types";

const fetchBooks = async (req: NextApiRequest, res: NextApiResponse<Books>) => {
  const { query } = req;
  const googleBooksUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOK_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await axios.get(
      `${googleBooksUrl}?q=${query.title}&key=${apiKey}`
    );

    res.send(response.data);
  } catch (error: any) {
    res.send(error.response);
  }
};

export default fetchBooks;
