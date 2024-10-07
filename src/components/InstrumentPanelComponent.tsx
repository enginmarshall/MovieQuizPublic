import { Movie } from "@/models";
import { Badge, Box, Button } from "@mui/material";
import { useState } from "react";
import { MovieModalComponent } from "./MovieModalComponent";

interface IInstrumentPanelComponentProps {
    startGame: () => void,
    selectRandomMovie: () => Movie,
    showMoviePic: () => void,
    toggleMovieTitle: () => void,
    movieCount: number,
    gameStarted: boolean,
    movieTitleVisible: boolean;
    randomNumber: number,
    selectedMovie: Movie,
    selectedMovies: Array<Movie>
}

export const InstrumentPanelComponent: React.FC<IInstrumentPanelComponentProps> = (props: IInstrumentPanelComponentProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        backgroundColor: "#eebb00",
        width: '88.5rem',
        height: '4.5rem',
        color: '#000',
        padding: '1rem 0 1rem 1rem',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'text-start',
        justifyContent: 'space-evenly',
        spaceBetween: '1rem'
    };

    const movieTitleButtonText = !props.movieTitleVisible ? "Show movie title" : "Hide movie title";

    return (
        <>
            <Box sx={{ ...style }} id="instrumentPanel">
                {!props.gameStarted &&
                    <Button variant="contained" id="btnStartGame" onClick={props.startGame}>Start game</Button>
                }
                {props.gameStarted &&
                    <>
                        <Button variant="contained" id="btnNextMovie" onClick={props.selectRandomMovie}>Next movie</Button>
                        <Button variant="contained" id="btnShowtMovie" onClick={props.showMoviePic}>Show movie picture</Button>
                        <Button variant="contained" id="btnMovieTitle" onClick={props.toggleMovieTitle}>{movieTitleButtonText}</Button>
                        <Box sx={{ width: '200px' }}>
                            {(props.selectedMovie && props.movieTitleVisible) &&
                                <b>{props.selectedMovie.Title}</b>
                            }
                        </Box>
                        <Button variant="contained" id="btnMovieDetails" onClick={handleOpen}>Movie details</Button>
                        <div>
                            <Badge badgeContent={props.movieCount} sx={{ marginRight: '1rem' }} color="primary"> </Badge> movies remains
                        </div>
                        <MovieModalComponent handleClose={handleClose} open={open} movie={props.selectedMovie} />
                    </>
                }
            </Box>
        </>
    );
}

