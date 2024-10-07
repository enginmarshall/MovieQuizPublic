import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useRef, useState } from "react";
import { getInstructionsSourceUrl } from "@/utilities/sharedHelper";
import { UmbracoInstruction } from "@/models/umbracodto/UmbracoInstructionsDto";
import homeStyles from "@/styles/Home.module.css";

export const InstructionsComponent: React.FC = () => {
    const instructions = useRef('');
    const [reRender, setRerender] = useState(false);

    let sourceUrl = getInstructionsSourceUrl();

    const getInstructions = useCallback(async () => {
        const res = await fetch(sourceUrl)
        const resData = await res.json() as UmbracoInstruction;
        instructions.current = resData?.properties.instructionText.markup;
        return resData;
    }, [sourceUrl]);

    const { isPending, isError, data, error } = useQuery({ queryKey: ['movies'], queryFn: getInstructions, staleTime: Infinity })

    if (isPending) return <p>Loading...</p>

    if (isError) {
        return (
            <Grid id="InstructionsComponent" container
                sx={{
                    display: 'flex', justifyContent: "center", alignItems: "center",
                    width: '50rem', height: '40rem', overflow: 'hidden',
                }}>
                <h2>
                    Could not load data!
                    <br />
                    Refresh the webpage to try again.
                </h2>
            </Grid>

        )
    }
    if (!isError && !instructions) {
        return (
            <h1>Data doesn`t exist.</h1>
        )
    }

    return (
        <Grid id="instructionsBox" container rowSpacing={1} columnSpacing={{ xl: 1 }} sx={{ maxWidth: '65rem', marginTop: '2rem' }}>
            <Grid item xl={12} sx={{ p: 1 }}>
                <div className={`${homeStyles.instructionsContent}`}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: instructions.current
                        }}></div>
                </div>
            </Grid>
        </Grid >
    );
}