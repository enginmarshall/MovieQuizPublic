import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { DataSources, Movie } from "@/models";
import { QuizCellComponent } from "./";

interface IQuizBoardComponentProps {
  dataSource: DataSources;
  isButtonsVisible: boolean;
  selectedMovie: Movie;
  gameStarted: boolean;
  gridNumbers: Array<number>;
}

export const QuizBoardComponent = (props: IQuizBoardComponentProps) => {
  const gridNumbers = Array.from(Array(props.gridNumbers.length).fill(0), (_, index) => index);
  const selectedMovie = props.selectedMovie;
  const dataSource = props.dataSource;
  let baseUrl: string = '';
  if (dataSource == DataSources.UMBRACO) {
    baseUrl = process.env.NEXT_PUBLIC_UMBRACO_BASE_URL ?? '';
  }
  if (dataSource == DataSources.STRAPI) {
    baseUrl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? '';
  }

  let imageUrl = baseUrl;
  if (selectedMovie && selectedMovie.Image) {
    imageUrl = imageUrl + selectedMovie.Image.url;
  }

  // const [moviePicUrl, setMoviePicUrl] = useState("");
  const [reRender, setRerender] = useState(false);
  const forceUpdate = React.useCallback(() => setRerender(true), []);

  const [isVisible, setIsVisible] = useState<boolean>(props.isButtonsVisible);

  useEffect(() => {
    setIsVisible(props.isButtonsVisible);
    // setMoviePicUrl(imageUrl);
    // forceUpdate();
  }, [props.isButtonsVisible]);

  const drawBoxes = () => gridNumbers.map((num, index) => {
    return (
      <QuizCellComponent key={index + '_' + num} number={num + 1} gameStarted={props.gameStarted} />
    );
  });

  if (!selectedMovie) {
    return (
      <Grid id="QuizBoardComponent" container
        sx={{
          display: 'flex', justifyContent: "center", alignItems: "center",
          width: '88.5rem', height: '65.5rem', overflow: 'hidden',
        }}>
        <h2>
          Could not load a movie!
          <br />
          Click on the Next movie button to try again.
        </h2>
      </Grid>
    )
  }
  return (
    <>
      {gridNumbers &&
        <>
          <Grid id="QuizBoardComponent" container
            sx={{
              width: '88.5rem', height: '65.5rem', overflow: 'hidden',
              backgroundImage: 'url("' + imageUrl + '")',
              backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
            {isVisible &&
              drawBoxes()
            }
          </Grid>
        </>
      }
    </>
  );
};
