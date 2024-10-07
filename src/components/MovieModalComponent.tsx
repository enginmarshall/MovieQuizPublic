/* eslint-disable react/jsx-no-undef */
import { Movie } from "@/models";
import { CloseRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, Grid, Modal, Typography } from "@mui/material";
import modalStyles from "@/styles/MovieModal.module.css";

interface IMovieModalComponentProps {
    handleClose: () => void;
    open: boolean;
    movie: Movie;
}

const style = {
    position: 'absolute' as 'absolute', padding: '1rem 1rem 2rem 2rem', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    width: '70rem', height: 'auto', backgroundColor: '#000',
    backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover',
    boxShadow: 'rgba(255, 255, 255, 0.4) 5px 5px, rgba(155, 155, 155, 0.3) 10px 10px, rgba(155, 155, 155, 0.2) 15px 15px, rgba(155, 155, 155, 0.1) 20px 20px, rgba(100, 100, 100, 0.05) 25px 25px;'
};

export const MovieModalComponent = (props: IMovieModalComponentProps) => {

    const movie = props.movie;

    const genreList = () => movie.genres.map((genre, index) => {
        const firstLetter = genre.GenreName.substring(0, 1);
        return (
            <Chip label={genre.GenreName} variant="filled" color="info" key={genre.GenreName + index} sx={{ padding: '1rem', marginRight: '1rem', fontSize: '1.3rem' }} />
        );

    });

    return (
        <>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <>
                    <Box sx={{ ...style }} id="movieModalBox">

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={`${modalStyles.titleRow}`}>
                            <Grid item xs={11}>
                                <Typography id="modal-modal-title" variant="h3" component="h3">
                                    {movie.Title}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ textAlign: 'right' }}>
                                <Button sx={{ height: '40px', width: '30px' }} variant="contained" color="error" onClick={props.handleClose}>
                                    <CloseRounded onClick={props.handleClose} data-testid="CloseIcon" />
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sx={{ paddingLeft: '2rem', paddingTop: '2rem' }}>
                            <Typography id="modal-genre-list">
                                {movie && movie.genres &&
                                    <>{genreList()}</>
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: '#000', p: '2rem' }}>
                                <iframe name="movieIframe" id="movieIframe"
                                    title="movieIframe"
                                    width="1000" height="600"
                                    src={movie.Trailer}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={5}>
                                        <Typography sx={{ mt: 2 }}>
                                            <label className={`${modalStyles.yellowLabel}`}>IMDB page: </label><a href={`https://www.imdb.com/title/${movie.ImdbId}`} target="_blank" rel="noopener noreferrer">{`https://www.imdb.com/title/${movie.ImdbId}`}</a>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ mt: 2 }}>
                                            <label className={`${modalStyles.yellowLabel}`}>Year: </label>{movie.Year}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography sx={{ mt: 2 }}>
                                            <label className={`${modalStyles.yellowLabel}`}>Director: </label>{movie.Director}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ mt: 2 }}>
                                            <label className={`${modalStyles.yellowLabel}`}>Stars: </label>{movie.Stars}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography sx={{ mt: 2 }}>
                                            <label className={`${modalStyles.yellowLabel}`}>Writers: </label>{movie.Writers}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <label className={`${modalStyles.yellowLabel}`}>Plot: </label>
                                            <br />
                                            {movie.Description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </>
            </Modal >
        </>
    );
}