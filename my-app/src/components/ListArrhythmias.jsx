import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function ListArrhythmias({arr}) { 
  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        
      }}
    >
      <div>
      <List>
          {arr.map((element)=>{
            return(
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={element} />
              </ListItemButton>
              </ListItem>
            )
          })}
          
        </List>
      </div>
      
    </Box>
    
  );
}
