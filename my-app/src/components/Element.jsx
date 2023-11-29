import * as React from 'react';
import Box from '@mui/material/Box';
import Status from './Status';
import ListArrhythmias from './ListArrhythmias';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';
export default function Element({statusPatient,namePatient,date,arr,id}) {
  //Manage the hide/show list of Arrhytmias
  const [show,setShow] = React.useState(false);
  const showList=()=>{
    if(show){
        return(<ListArrhythmias arr ={arr} />);
    }
  }
  const handleClick = ()=>{
    if(show) setShow(false);
    else setShow(true);
  }
  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div>
        <Button variant="contained" startIcon={show? <CloseIcon sx={{ fontSize: 40 }}/>:<ListIcon sx={{ fontSize: 40 }}/>}
          onClick={handleClick}
        >
        {namePatient}
        </Button>
        <p>{date}</p>
        <Status statusPatient={statusPatient}  id={id} />
        {showList()}
        </div>
        <div>
      </div>
    </Box>
  );
}