export interface MovieListRoot {
  data: Daum[];
  meta: Meta;
}

export interface Daum {
  id: number;
  attributes: StrapiDtoMovie;
}

export interface StrapiDtoMovie {
  Title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  ImdbId: string;
  Year: number;
  Writers: string;
  Director: string;
  Stars: string;
  ImageUrl: string;
  Trailer: string;
  Description: string;
  genres: Genres;
  Image: Image;
  Images: Images;
}

export interface Genres {
  data: Daum2[];
}

export interface Daum2 {
  id: number;
  attributes: DtoGenre;
}

export interface DtoGenre {
  GenreName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Image {
  data: Data;
}

export interface Data {
  id: number;
  attributes: DtoImage;
}

export interface DtoImage {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Thumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Images {
  data: any;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
