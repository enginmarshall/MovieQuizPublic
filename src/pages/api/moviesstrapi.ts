import { Movie } from "../../models/types/Movie";
import type { NextApiRequest, NextApiResponse } from "next";
import { convertStrapiDtoMovie } from "@/utilities/converter";


export const getMovies = async () => {
  try {
    let movies = Array<Movie>();

    const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/movies?populate=*`;

    let response = await fetch(apiUrl);
    let data = await response.json();
    let dtoMovies = data.data;

    for (let i = 0; i < dtoMovies.length; i++) {
      const dtoMovie = dtoMovies[i].attributes;
      const movie = convertStrapiDtoMovie(dtoMovie);
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
