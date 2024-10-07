import { Genre, Movie } from "@/models";
import { ContentfulMovie } from "@/models/contentful-dto/ContentfulMoviesDto";
import { StrapiDtoMovie } from "@/models/strapidto/StrapiMoviesDto";
import { UmbracoDtoMovie } from "@/models/umbracodto/UmbracoMoviesDto";

export const convertStrapiDtoMovie = (dtoMovie: StrapiDtoMovie): Movie => {
  let movie: Movie = {
    Title: dtoMovie.Title,
    ImdbId: dtoMovie.ImdbId ?? "",
    Year: dtoMovie.Year ?? 0,
    Writers: dtoMovie.Writers ?? "",
    Director: dtoMovie.Director ?? "",
    Stars: dtoMovie.Stars ?? "",
    ImageUrl: dtoMovie.ImageUrl ?? "",
    Trailer: dtoMovie.Trailer ?? "",
    Description: dtoMovie.Description ?? "",
    genres: [],
    Image: {
      name: dtoMovie.Image.data.attributes.name,
      alternativeText: dtoMovie.Image.data.attributes.alternativeText,
      caption: dtoMovie.Image.data.attributes.caption,
      width: dtoMovie.Image.data.attributes.width,
      height: dtoMovie.Image.data.attributes.height,
      size: dtoMovie.Image.data.attributes.size,
      url: dtoMovie.Image.data.attributes.url,
    },
    ThumbnailImage: {
      name: dtoMovie.Image.data.attributes.name,
      alternativeText: dtoMovie.Image.data.attributes.alternativeText,
      caption: dtoMovie.Image.data.attributes.caption,
      width: dtoMovie.Image.data.attributes.formats.thumbnail.width,
      height: dtoMovie.Image.data.attributes.formats.thumbnail.height,
      size: dtoMovie.Image.data.attributes.formats.thumbnail.size,
      url: dtoMovie.Image.data.attributes.formats.thumbnail.url,
    },
  };
  if (dtoMovie && dtoMovie.genres) {
    dtoMovie.genres.data.forEach((genre) => {
      const newGenre = {
        GenreName: genre.attributes.GenreName,
      } as Genre;
      movie.genres.push(newGenre);
    });
  }
  return movie;
};

export const convertUmbracoDtoMovie = (dtoMovie: UmbracoDtoMovie): Movie => {
  let movie: Movie = {
    Title: dtoMovie.properties.title,
    ImdbId: dtoMovie.properties.imdbId ?? "",
    Year: dtoMovie.properties.year ?? 0,
    Writers: dtoMovie.properties.writers ?? "",
    Director: dtoMovie.properties.director ?? "",
    Stars: dtoMovie.properties.stars ?? "",
    ImageUrl: dtoMovie.properties.image[0].url ?? "",
    Trailer: dtoMovie.properties.trailer ?? "",
    Description: dtoMovie.properties.description ?? "",
    genres: [],
    Image: {
      name: dtoMovie.properties.image[0].name,
      alternativeText: dtoMovie.properties.image[0].name,
      caption: dtoMovie.properties.image[0].name,
      width: dtoMovie.properties.image[0].width,
      height: dtoMovie.properties.image[0].height,
      size: dtoMovie.properties.image[0].bytes,
      url: dtoMovie.properties.image[0].url,
    },
    ThumbnailImage: {
      name: dtoMovie.properties.image[0].name,
      alternativeText: dtoMovie.properties.image[0].name,
      caption: dtoMovie.properties.image[0].name,
      width: dtoMovie.properties.image[0].width,
      height: dtoMovie.properties.image[0].height,
      size: dtoMovie.properties.image[0].bytes,
      url: dtoMovie.properties.image[0].url,
    }
  };
  if (dtoMovie && dtoMovie.properties.genre) {
    dtoMovie.properties.genre.forEach((genre) => {
      const newGenre = {
        GenreName: genre.name,
      } as Genre;
      movie.genres.push(newGenre);
    });
  }
  return movie;
};

export const convertContentfulMovie = (dtoMovie: ContentfulMovie): Movie => {
  let movie: Movie = {
    Title: dtoMovie.title,
    ImdbId: dtoMovie.imdbId ?? "",
    Year: dtoMovie.year ?? 0,
    Writers: dtoMovie.writers ?? "",
    Director: dtoMovie.director ?? "",
    Stars: dtoMovie.stars ?? "",
    ImageUrl: dtoMovie.imageUrl ?? "",
    Trailer: dtoMovie.trailer ?? "",
    Description: dtoMovie.description ?? "",
    genres: [],
    Image: {
      name: dtoMovie.image?.fields.title,
      alternativeText: dtoMovie.image?.fields.description,
      caption: dtoMovie.image?.fields.description,
      width: dtoMovie.image?.fields.file.details.image.height,
      height: dtoMovie.image?.fields.file.details.image.height,
      size: dtoMovie.image?.fields.file.details.size,
      url: dtoMovie.image?.fields.file.url ?? dtoMovie.imageUrl,
    },
    ThumbnailImage: {
      name: dtoMovie.image?.fields.title,
      alternativeText: dtoMovie.image?.fields.description,
      caption: dtoMovie.image?.fields.description,
      width: dtoMovie.image?.fields.file.details.image.height,
      height: dtoMovie.image?.fields.file.details.image.height,
      size: dtoMovie.image?.fields.file.details.size,
      url: dtoMovie.image?.fields.file.url,
    },
  };
  if (dtoMovie && dtoMovie.genre) {
    dtoMovie.genre.forEach((g) => {
      const newGenre = {
        GenreName: g.fields.genreName,
      } as Genre;
      movie.genres.push(newGenre);
    });
  }
  return movie;
};
