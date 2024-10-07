import { Movie } from "@/models";
import { Badge, Box, Button, Grid } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MovieComponent } from "./MovieComponent";

export const MovieListComponent: React.FC = () => {
    const allMovies = useRef(Array<Movie>())
    const [movies, setMovies] = useState(Array<Movie>())
    const [selectedMovies, setSelectedMovies] = useState(Array<Movie>());
    const selectedMovie = useRef({} as Movie);
    const randomNumber = useRef(0);
    const [reRender, setRerender] = useState(false);

    const getMovies = useCallback(() => {
        fetch('/api/movies')
            .then((res) => res.json())
            .then((data) => {
                allMovies.current = data;
                setMovies(allMovies.current);
            });
    }, []);

    const getRandomMovie = useCallback((min: number = 0, max: number = movies.length) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomInt = Math.floor(Math.random() * (max - min)) + min;
        randomNumber.current = randomInt;
        const randomMovie = movies[randomNumber.current];
        return randomMovie;
    }, [movies]);

    const updateSelectedMovies = useCallback(() => {
        setSelectedMovies(selectedMovies.concat([selectedMovie.current]));
        setRerender(reRender);
    }, [reRender, selectedMovies]);

    const updateMovieList = useCallback(() => {
        const newMovieList = movies.filter((obj: Movie) => { return obj.ImdbId !== selectedMovie.current.ImdbId });
        setMovies(newMovieList);
        setRerender(reRender);
    }, [movies, reRender]);

    const selectRandomMovie = useCallback(() => {
        const movie = getRandomMovie();
        if (movie) {
            selectedMovie.current = movie;
            updateMovieList();
            updateSelectedMovies();
        }
        else {
            const styles = ['color: green', 'background: yellow'].join(';');
            selectRandomMovie();
        }
        return selectedMovie.current;
    }, [getRandomMovie, updateMovieList, updateSelectedMovies]);

    const selectMovie = useCallback(() => {
        selectRandomMovie();
    }, [selectRandomMovie]);

    useEffect(() => {
        setSelectedMovies(Array<Movie>());
        randomNumber.current = 0;
        setRerender(reRender);
    }, [reRender])

    const queryClient = useQueryClient()

    // Queries
    const query = useQuery({ queryKey: ['movies'], queryFn: getMovies, staleTime: Infinity })

    if (query.isLoading) return <p>Loading...</p>
    if (!movies || (movies && setMovies.length === 0)) return <p>No movies</p>

    const listMovies = (movieList: Array<Movie>) => movieList.map((movie, index) => {
        return (
            <li key={(movie?.ImdbId ?? '') + index} id={(movie?.ImdbId ?? '') + index}>
                {movie?.Title} {movie?.ImdbId}
            </li>)
    })

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}>
            <Grid item xs={2} md={4} sx={{ p: 2, border: '1px dashed cyan' }}>
                <h2>Antal filmer: {movies.length}</h2>
                {
                    listMovies(movies)
                }
            </Grid>

            <Grid item xs={8} md={4} sx={{ p: 2, border: '1px dashed yellow' }}>
                <Box
                    sx={{
                        margin: 'auto',
                        width: 200,
                        height: 70,
                        borderRadius: 1,
                        p: 2,
                        bgcolor: 'yellow',
                        '&:hover': {
                            bgcolor: 'red',
                        },
                    }}
                >
                    {movies.length > 0 &&
                        <Badge badgeContent={randomNumber.current} color="primary">
                            <Button variant="contained" onClick={() => { selectMovie() }}>Next movie</Button>
                        </Badge>
                    }
                    {movies.length == 0 &&
                        <>Slut på filmer.</>
                    }
                </Box>
                {selectedMovie &&
                    <MovieComponent movie={selectedMovie.current} />
                }
            </Grid>

            <Grid item xs={2} md={4} sx={{ p: 2, border: '1px dashed cyan' }}>
                <h2>Valda filmer: {selectedMovies.length}</h2>
                {
                    listMovies(selectedMovies)
                }
            </Grid>
        </Grid >
    );
}