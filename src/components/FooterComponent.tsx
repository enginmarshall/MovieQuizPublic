import * as React from 'react';
import Box from '@mui/material/Box';

export default function FooterComponent() {
    const [value, setValue] = React.useState(0);
    const a:number = 1;
    const b:number = 2;

    if (a === b) {
        console.log(a);
    }

    return (
        <Box sx={{ width: '100wh', padding: '2rem', height: '5rem', backgroundColor: 'primary' }}>
        </Box>
    );
}
