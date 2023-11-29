import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/system';
import Loading from './Loading';

export default function FilterOptions({dataFilter,label,k,action}) {
  //variables);
  const [selectedValue, setSelectedValue] = React.useState(null);

  const dataFiltration = () =>{
    let s = dataFilter.map((element)=>{
      for(let i of element.arrhythmias){
          return i;
      } 
    });
    let set = new Set(s);
    return Array.from(set);
  }

  const handleChange = (event, newValue) => {
    setSelectedValue(newValue);
    
    let dummy = dataFilter.map((element)=>{
      element['visibility'] = true;
      return element;
    });
    action(dummy);
    if(newValue){
      //if it is about the name
      if(k=="patient_name"){
        let dummy = dataFilter.map((element)=>{
          if(element.patient_name!=newValue){
            element['visibility'] = false;
          }
          return element;
        });
        action(dummy);
      }
      
      //about the arrhythmias
      else{
        let dummy = dataFilter.map((element)=>{
          let set = new Set(element.arrhythmias);
          if(!set.has(newValue)){
            element['visibility'] = false;
          }
          return element;
        });
        action(dummy);  
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
            options={k=="patient_name"?dataFilter.map((element)=>{
              return element.patient_name;
            }):dataFiltration()}
            component="div"
            sx={{ marginLeft:6, bgcolor: 'white' }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
      ):
      (<Loading />)
      }
      
    </Box>
  
    
  );
}


