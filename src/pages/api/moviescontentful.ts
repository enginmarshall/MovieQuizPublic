import { Movie } from "../../models/types/Movie";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CreateClientParams, createClient } from "contentful";
import { convertContentfulMovie } from "@/utilities/converter";

enum DataModels {
  MOVIE = "movie",
  GENRE = "genre",
}

const spaceId: string = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  ? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  : "";
const accessToken: string = process.env
  .NEXT_PUBLIC_CONTENT_DELIVERY_API_ACCESSTOKEN
  ? process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API_ACCESSTOKEN
  : "";
const personalAccessToken: string = process.env
  .NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN
  ? process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN
  : "";
const clientParams: CreateClientParams = {
  space: spaceId,
  accessToken: accessToken,
};
const client = createClient(clientParams);

async function getEntriesRaw(contentType: string) {
  const cEntries = Array<any>();
  await client
    .getEntries({
      content_type: contentType,
    })
    .then(function (entries) {
      entries.items.forEach(function (entry) {
        cEntries.push(entry);
      });
    });
  return cEntries;
}

async function getEntries(contentType: string) {
  const cEntries = Array<any>();
  await client
    .getEntries({
      content_type: contentType,
    })
    .then(function (entries) {
      entries.items.forEach(function (entry) {
        cEntries.push(entry.fields);
      });
    });
  return cEntries;
}

let allMovies = Array<Movie>();
export const getMovies = async () => {
  try {
    const dtoMovies = await getEntries(DataModels.MOVIE);
    let movies = Array<Movie>();
    for (let i = 0; i < dtoMovies.length; i++) {
      const dtoMovie = dtoMovies[i];
      const movie = convertContentfulMovie(dtoMovie);
      movies.push(movie);
    }
    return movies;
  } catch (error) {
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const list = await getMovies();
    if (list) {
      allMovies = [...list];
      res.status(200).json(list);
    }
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
