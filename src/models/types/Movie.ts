import { Genre, Image } from "../";

// Recension
export type Movie = {
  Title: string;
  ImdbId: string;
  Year: number;
  Writers: string;
  Director: string;
  Stars: string;
  ImageUrl: string;
  Trailer: string;
  Description: string;
  genres: Array<Genre>;
  Image: Image;
  ThumbnailImage: Image;
};
