import * as React from 'react';
import Box from '@mui/material/Box';
import Status from './Status';
import ListArrhythmias from './ListArrhythmias';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import Button from '@mui/material/Button';
export default function Element({statusPatient,namePatient}) {
  //Manage the hide/show list of Arrhytmias
  const [show,setShow] = React.useState(false);
  const showList=()=>{
    if(show){
        return(<ListArrhythmias/>);
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
        flexDirection: 'column',
        '& > *': {
          marginBottom: 1,
        },
        '& .MuiBadge-root': {
          marginRight: 2,
        },
      }}
    >
      <div>
      
      
     
      
      <Button variant="contained" startIcon={show? <CloseIcon sx={{ fontSize: 40 }}/>:<ListIcon sx={{ fontSize: 40 }}/>}
        onClick={handleClick}
      >
        {namePatient}
      </Button>
      <p>{"12/05/2010"}</p>
      <Status statusPatient={statusPatient}/>
      {showList()}

      </div>
      <div>
      
      </div>
    </Box>
  );
}