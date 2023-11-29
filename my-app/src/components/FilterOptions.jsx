import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import Loading from './Loading';
import { useStatus } from './Column';
export default function FilterOptions({dataFilter,label,k}) {
  //USE CONTEXT
  const { waitingFor } = useStatus();
  const { done } = useStatus();
  const { setWaitingFor } = useStatus();
  const { setDone } = useStatus();
  //variables
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
    console.log(selectedValue);
    if(newValue){
      console.log(newValue)
      if(k == "patient_name"){
        let dummy = done.map((element)=>{
          if(!element.patient_name.startsWith(newValue)){
            const dArray = [...done, { ...element, ['visibility']: false }];
            //setDone(dArray);
          }
          return element;
        })
        setDone(dummy);
      }
     
    }
  };
  return (
    <Box
     sx={{ marginLeft:30, width: '35ch' }}
    >
      {dataFilter?
      (
        <Autocomplete
            value={selectedValue}
            onChange={handleChange}
            options={k!="patient_name"?dataFilter.map((element)=>{
              return element.patient_name;
            }):dataFilter.map((element)=>{
              for(let i of element.arrhythmias){
                return i;
              } 
            })}
            component="div"
            sx={{ marginLeft:5 }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
      ):
      (<Loading />)
      }
      
    </Box>
  
    
  );
}


