import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ bgcolor:"red",height:"90.6vh"}}>
        <Grid container spacing={1} display={'flex'} justifyContent={'space-between'}>
            <Grid xs={6}>
                <Box sx={{bgcolor:"yellow",display:"flex",alignItems:"center",justifyContent:"center"}}>fuck</Box>
            </Grid>
            <Grid xs={5}>
                <Box sx={{bgcolor:"yellow",display:"flex",alignItems:"center",justifyContent:"center"}}>Duck</Box>
            </Grid>
        </Grid>
    </Box>
  );
}