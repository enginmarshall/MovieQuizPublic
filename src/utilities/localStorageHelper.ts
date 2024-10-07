import { Movie } from "@/models";

const allMoviesVar = "allMovies";
const selectedMoviesVar = "selectedMovies";
const gameStartedVar = "gameStarted";
const selectedMovieVar = "selectedMovie";

let allMovies = Array<Movie>();
let selectedMovies = Array<Movie>();

export const setLSAllMovies = (movies: Array<Movie>) => {
    window.localStorage.setItem(allMoviesVar, JSON.stringify(movies));
}

export const setLSSelectedMovies = (movies: Array<Movie>) => {
    window.localStorage.setItem(selectedMoviesVar, JSON.stringify(movies));
}

export const getLSGameStarted = () => {
    const gameStatus = window.localStorage.getItem(gameStartedVar);
    if (gameStatus) {
        return JSON.parse(gameStatus) as boolean;
    }
    return false;
}

export const setLSGameStarted = (gameStarted: boolean) => {
    window.localStorage.setItem(gameStartedVar, JSON.stringify(gameStarted));
}

export const getLSSelectedMovie = () => {
    const movie = window.localStorage.getItem(selectedMovieVar);
    if (movie) {
        return JSON.parse(movie) as Movie;
    }
    return null;
}

export const setLSSelectedMovie = (movie: Movie) => {
    window.localStorage.setItem(selectedMovieVar, JSON.stringify(movie));
}

export const getLSAllMovies = () => {
    const movieList = window.localStorage.getItem(allMoviesVar);
    if (movieList) {
        allMovies = JSON.parse(movieList) as Array<Movie>;
    }
    return allMovies;
}

export const getLSSelectedMovies = () => {
    const movieList = window.localStorage.getItem(selectedMoviesVar);
    if (movieList) {
        selectedMovies = JSON.parse(movieList) as Array<Movie>;
    }
    return selectedMovies;
}

export const addLSToSelectedMovies = (movie: Movie) => {
    getLSAllMovies();
    const newMovieList = allMovies.filter((obj: Movie) => { return obj.ImdbId !== movie.ImdbId });
    allMovies = newMovieList;
    setLSAllMovies(allMovies);
    selectedMovies.push(movie);
    setLSSelectedMovies(selectedMovies);
}

export const resetLS = () => {
    window.localStorage.removeItem(allMoviesVar);
    window.localStorage.removeItem(selectedMoviesVar);
    window.localStorage.removeItem(gameStartedVar);
    window.localStorage.removeItem(selectedMovieVar);
}

