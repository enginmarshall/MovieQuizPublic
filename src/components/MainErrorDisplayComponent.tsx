import { Grid } from "@mui/material"

export const MainErrorDisplayComponent = () => {
    return (
        <Grid id="MainErrorComponent" container
            sx={{
                display: 'flex', justifyContent: "center", alignItems: "center",
                width: '75.2rem', height: '65.7rem', overflow: 'hidden',
            }}>
            <h2>
                Could not load a movie!
                <br />
                Click on the Next movie button to try again.
            </h2>
        </Grid>
    )
}
