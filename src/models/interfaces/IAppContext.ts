import { Movie } from "..";

export interface IAppContext {
  movies: Movie[] | undefined;
  isButtonsVisible: boolean;
  hideImage: () => void;
  showImage: () => void;
}
