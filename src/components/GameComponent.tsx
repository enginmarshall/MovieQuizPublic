import { DataSources, Movie } from "@/models";
import { Button, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useRef, useState } from "react";
import { QuizBoardComponent, InstrumentPanelComponent } from "./";
import { addLSToSelectedMovies, getLSAllMovies, getLSGameStarted, getLSSelectedMovie, getLSSelectedMovies, resetLS, setLSAllMovies, setLSGameStarted, setLSSelectedMovie } from "@/utilities/localStorageHelper";
import { getDataSource, getMoviesSourceUrl } from "@/utilities/sharedHelper";

export const GameComponent: React.FC = () => {
    const selectedMovie = useRef({} as Movie);
    const randomNumber = useRef(0);
    const gridArray = Array<number>(500);
    const [gameStarted, setGameStarted] = useState(false);
    const [movieList, setMovieList] = useState(Array<Movie>())
    const [selectedMovies, setSelectedMovies] = useState(Array<Movie>());
    const [showButtons, setShowButtons] = useState(true);
    const [movieTitleVisible, setMovieTitleVisible] = useState(false);
    const [reRender, setRerender] = useState(false);
    const forceUpdate = React.useCallback(() => setRerender(true), []);

    let dataSource = useRef(getDataSource() as DataSources);
    let moviesSourceUrl = useRef(getMoviesSourceUrl());

    const getMovies = useCallback(async () => {
        const gameStatus = getLSGameStarted();
        setGameStarted(gameStatus);
        const lsSelectedMovie = getLSSelectedMovie();
        if (lsSelectedMovie) {
            selectedMovie.current = lsSelectedMovie;
        }
        const res = await fetch(moviesSourceUrl.current)
        const resData = await res.json() as Array<Movie>;
        const lsMovies = getLSAllMovies();
        const lsSelectedMovies = getLSSelectedMovies();
        if ((lsMovies && lsMovies.length == 0) && (lsSelectedMovies && lsSelectedMovies.length == 0)) {
            setLSAllMovies(resData);
            setMovieList(resData);
            return resData;
        }
        else {
            setMovieList(lsMovies);
            setSelectedMovies(lsSelectedMovies);
            return lsMovies;
        }
    }, [moviesSourceUrl]);

    const { isPending, isError, data, error } = useQuery({ queryKey: ['movies'], queryFn: getMovies, staleTime: Infinity })

    const getRandomMovie = useCallback((min: number = 0, max: number = movieList.length) => {
        setMovieTitleVisible(false);
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomInt = Math.floor(Math.random() * (max - min)) + min;
        randomNumber.current = randomInt;
        const randomMovie = movieList[randomNumber.current];
        return randomMovie;
    }, [movieList]);

    const updateSelectedMovies = useCallback(() => {
        setSelectedMovies(selectedMovies.concat([selectedMovie.current]));
        setRerender(reRender);
    }, [reRender, selectedMovies]);

    const updateMovieList = useCallback(() => {
        const newMovieList = movieList.filter((obj: Movie) => { return obj.ImdbId !== selectedMovie.current.ImdbId });
        setMovieList(newMovieList);
        addLSToSelectedMovies(selectedMovie.current)
        setRerender(reRender);
    }, [movieList, reRender]);

    const showMoviePic = useCallback(() => {
        setShowButtons(false);
    }, []);

    const toggleMovieTitle = useCallback(() => {
        setMovieTitleVisible(!movieTitleVisible);
    }, [movieTitleVisible]);

    const selectRandomMovie = useCallback(() => {
        setShowButtons(false);
        forceUpdate();
        const timeOut = setTimeout(() => {
            setShowButtons(true);
            forceUpdate();
            const movie = getRandomMovie();
            if (movie) {
                selectedMovie.current = movie;
                setLSSelectedMovie(movie);
                updateMovieList();
                updateSelectedMovies();
            }
            else {
                selectRandomMovie();
            }
            return () => clearTimeout(timeOut);
        }, 2000);
        return selectedMovie.current;
    }, [forceUpdate, getRandomMovie, updateMovieList, updateSelectedMovies]);

    const startGame = useCallback(() => {
        setGameStarted(true);
        setLSGameStarted(true);
        selectRandomMovie();
    }, [selectRandomMovie]);


    const resetLocalStorage = () => {
        resetLS();
        window.location.reload();
    }

    if (isPending) return <p>Loading...</p>

    if (isError) {
        return (
            <Grid id="QuizBoardComponent" container
                sx={{
                    display: 'flex', justifyContent: "center", alignItems: "center",
                    width: '50rem', height: '40rem', overflow: 'hidden',
                }}>
                <h2>
                    Could not load movies!
                    <br />
                    Refresh the webpage to try again.
                </h2>
            </Grid>

        )
    }
    if (!isError && movieList && movieList.length === 0) {
        return (
            <Grid id="QuizBoardComponent" container
                sx={{
                    display: 'flex', justifyContent: "center", alignItems: "center",
                    width: '50rem', height: '40rem', overflow: 'hidden',
                }}>
                <h2>
                    No more movies remains.
                    <br />
                    <br />
                    <Button variant="contained" onClick={resetLocalStorage}>Click here to start over!</Button>
                </h2>
            </Grid>

        )
    }

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xl: 1 }}>
            <Grid item xl={12} sx={{ p: 1 }}>
                <InstrumentPanelComponent startGame={startGame}
                    selectRandomMovie={selectRandomMovie} showMoviePic={showMoviePic} movieCount={movieList.length}
                    gameStarted={gameStarted} randomNumber={randomNumber.current} selectedMovie={selectedMovie.current}
                    movieTitleVisible={movieTitleVisible} toggleMovieTitle={toggleMovieTitle} selectedMovies={selectedMovies} />
            </Grid>
            <Grid item xl={12}>
                {gameStarted &&
                    <QuizBoardComponent dataSource={dataSource.current} selectedMovie={selectedMovie.current}
                        gridNumbers={gridArray}
                        isButtonsVisible={showButtons}
                        gameStarted={gameStarted} />
                }
            </Grid>
        </Grid >
    );
}