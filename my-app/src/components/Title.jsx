import * as React from 'react';
import Box from '@mui/material/Box';
export default function Title({title}) {
  return (
    <Box
      sx={{
        color: 'white',
        marginLeft: 50,
        flexDirection: 'column'
      }}
    >
      <div>
        <h1 >{title}</h1>
      </div>
    </Box>
  );
}