import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const fetchBooks = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { query } = req;
  const googleBooksUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOK_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await axios.get(
      `${googleBooksUrl}?q=${query.title}&key=${apiKey}`
    );

    res.send(response.data);
  } catch (error) {
    res.send(error.response);
  }
};

export default fetchBooks;
