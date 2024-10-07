export type MovieListRoot = ContentfulMovie[];

export interface ContentfulMovie {
  title: string;
  imdbId: string;
  year: number;
  genre?: Genre[];
  writers: string;
  director: string;
  stars: string;
  image?: Image;
  imageUrl?: string;
  trailer: string;
  description: string;
  images?: Image3[];
  aiImage?: AiImage;
}

export interface Genre {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}

export interface Metadata {
  tags: any[];
}

export interface Sys {
  space: Space;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface ContentType {
  sys: Sys4;
}

export interface Sys4 {
  type: string;
  linkType: string;
  id: string;
}

export interface Fields {
  genreName: string;
}

export interface Image {
  metadata: Metadata2;
  sys: Sys5;
  fields: Fields2;
}

export interface Metadata2 {
  tags: any[];
}

export interface Sys5 {
  space: Space2;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment2;
  revision: number;
  locale: string;
}

export interface Space2 {
  sys: Sys6;
}

export interface Sys6 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment2 {
  sys: Sys7;
}

export interface Sys7 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image2;
}

export interface Image2 {
  width: number;
  height: number;
}

export interface Image3 {
  metadata: Metadata3;
  sys: Sys8;
  fields: Fields3;
}

export interface Metadata3 {
  tags: any[];
}

export interface Sys8 {
  space: Space3;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment3;
  revision: number;
  locale: string;
}

export interface Space3 {
  sys: Sys9;
}

export interface Sys9 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment3 {
  sys: Sys10;
}

export interface Sys10 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields3 {
  title: string;
  description: string;
  file: File2;
}

export interface File2 {
  url: string;
  details: Details2;
  fileName: string;
  contentType: string;
}

export interface Details2 {
  size: number;
  image: Image4;
}

export interface Image4 {
  width: number;
  height: number;
}

export interface AiImage {
  metadata: Metadata4;
  sys: Sys11;
  fields: Fields4;
}

export interface Metadata4 {
  tags: any[];
}

export interface Sys11 {
  space: Space4;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment4;
  revision: number;
  locale: string;
}

export interface Space4 {
  sys: Sys12;
}

export interface Sys12 {
  type: string;
  linkType: string;
  id: string;
}

export interface Environment4 {
  sys: Sys13;
}

export interface Sys13 {
  id: string;
  type: string;
  linkType: string;
}

export interface Fields4 {
  title: string;
  description: string;
  file: File3;
}

export interface File3 {
  url: string;
  details: Details3;
  fileName: string;
  contentType: string;
}

export interface Details3 {
  size: number;
  image: Image5;
}

export interface Image5 {
  width: number;
  height: number;
}
