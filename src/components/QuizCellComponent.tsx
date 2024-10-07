import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";

interface IQuizCellComponentProps {
  number: number;
  gameStarted: boolean;
}

export const QuizCellComponent = (props: IQuizCellComponentProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [reRender, setRerender] = useState(false);

  const hideButton = () => {
    if (props.gameStarted) {
      setIsVisible(false);
    }
  };

  // useEffect(() => {
  //   forceUpdate();
  // }, [forceUpdate, isVisible, reRender]);

  return (
    <>
      <Grid item className="quiz-cell"
        sx={{ height: '116px', width: '118px' }}>

        {isVisible && (
          <Button className=""
            sx={{
              border: '4px solid #AD3319', borderRadius: '0',
              borderStyle: 'inset', width: '100%', height: '100%',
              '&:hover': { borderColor: '#52D619', },
              fontSize: '2.5rem', fontStyle: 'italic', fontWeight: 'bold',
              backgroundColor: '#1024EB'
            }}
            variant="contained" onClick={() => hideButton()}>
            {props.number}
          </Button>
        )}
      </Grid>
    </>
  );
};
