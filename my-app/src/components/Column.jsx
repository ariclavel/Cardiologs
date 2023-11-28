import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { color } from '@mui/system';
import Element from './Element';
import Title from './Title';
import FilterOptions from './FilterOptions';
import Stack from '@mui/material/Stack';;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: 50,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Column() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#6693F5' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid xs={6}>
        <Title title = "To Do" />
            <div>
                <Stack direction="row" spacing={2}>
                <FilterOptions label = "Arythmias"/>
                <FilterOptions label = "Name"/>
                </Stack>
            </div>
            <Item><Element namePatient="Ariana Ayaviri" statusPatient = "Rejected"/></Item>
            <Item><Element namePatient="Rosa Clavel" statusPatient = "Done"/></Item>
            <Item><Element namePatient="Maria Gonzalez" statusPatient = "Done"/></Item>            
        </Grid>
        
        <Grid xs={6}>
        <Title title = "Done" />
            <div>
                <Stack direction="row" spacing={2}>
                <FilterOptions label = "Arythmias"/>
                <FilterOptions label = "Name"/>
                </Stack>
            </div>
            <Item><Element namePatient="Ariana Ayaviri" statusPatient = "Done"/></Item>
            <Item><Element namePatient="Aretingo" statusPatient = "Done"/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
