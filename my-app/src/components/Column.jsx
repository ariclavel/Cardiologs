import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Element from './Element';
import Title from './Title';
import FilterOptions from './FilterOptions';
import Stack from '@mui/material/Stack';
import { useEffect,useContext } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: 50,
  textAlign: 'center'
}));
const ContextCards = React.createContext();
export default function Column({cards}) {
  const [done,setDone] = React.useState([]);
  const [waitingFor,setWaitingFor] = React.useState([]);
  
  useEffect(()=>{
    let dummy = cards.filter((element)=>{
        element['visibility'] = true;
        return element.status == "DONE";
    })
    setDone(dummy);
    dummy = [];
    dummy = cards.filter((element)=>{
      element['visibility'] = true;
      return element.status != "DONE";
    })
    setWaitingFor(dummy);
  },[]);
  return (
    <ContextCards.Provider value={{done,waitingFor,setDone, setWaitingFor}}>
  
    <Box sx={{ width: '100%', bgcolor: '#6693F5' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
        <Title title = "To Do" />
            <div>
                <Stack direction="row" spacing={2}>
                <FilterOptions dataFilter={waitingFor} action ={setWaitingFor} k="arr" label = "Arythmias"/>
                <FilterOptions dataFilter={waitingFor} action ={setWaitingFor} k="patient_name" label = "Name"/>
                </Stack>
            </div>
            <div>
            {waitingFor.filter(element => element.visibility).map((element)=>{
              return(<Item key ={element.id}><Element key ={element.id} id={element.id} namePatient={element.patient_name} statusPatient ={element.status} date ={element.created_date.replace('T',' ').slice(0,19)} arr={element.arrhythmias} /></Item>)
            })}
            </div>          
        </Grid>
        
        <Grid xs={6}>
        <Title title = "Done" />
            <div>
                <Stack direction="row" spacing={2}>
                <FilterOptions  dataFilter={done} action ={setDone} k="arr" label = "Arythmias"/>
                <FilterOptions  dataFilter={done} action ={setDone} k="patient_name" label = "Name"/>
                </Stack>
            </div>
            {done.filter(element => element.visibility).map((element)=>{
              return(<Item key ={element.id}><Element  key ={element.id} id={element.id} namePatient={element.patient_name} statusPatient ={element.status} date ={element.created_date.replace('T',' ').slice(0,19)} arr={element.arrhythmias}/></Item>)
            })}
        </Grid>
      </Grid>
    </Box>
    </ContextCards.Provider>
  );
}
export function useStatus() {
  return useContext(ContextCards);
}