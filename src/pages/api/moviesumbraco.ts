import { Movie } from "../../models/types/Movie";
import type { NextApiRequest, NextApiResponse } from "next";
import { convertUmbracoDtoMovie } from "@/utilities/converter";


export const getMovies = async () => {
  try {
    let movies = Array<Movie>();

    const apiUrl = `${process.env.NEXT_PUBLIC_UMBRACO_BASE_API_URL}content?take=500&fetch=children:${process.env.NEXT_PUBLIC_UMBRACO_MOVIE_LIST_NODE_ID}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    const total = data.total;
    let dtoMovies = data.items;

    for (let i = 0; i < dtoMovies.length; i++) {
      const dtoMovie = dtoMovies[i];
      const movie = convertUmbracoDtoMovie(dtoMovie);
      movies.push(movie);
    }
    return movies;
  }
  catch (error) {
    console.log("🚀 ~ getMovies ~ error:", error)
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const allMovies = await getMovies();
    res.status(200).json(allMovies);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
