import { Movie } from "@/models";
import React from "react";

export interface IMovieComponentProps {
    movie: Movie;
}

export const MovieComponent: React.FC<IMovieComponentProps> = (props: IMovieComponentProps) => {
    const movie = props.movie;

    return (
        <div>
            {movie && movie.Title &&
                <table>
                    <thead>
                        <tr>
                            <td><h3>Filminfo</h3></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Titel: {movie.Title}</td>
                        </tr>
                    </tbody>
                </table>}
        </div >
    );
}