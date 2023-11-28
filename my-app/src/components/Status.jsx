import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function Status({statusPatient}) {
//Pending + Rejected and Done to initialize the slider
  const hashValues = {"Pending": true,  "Rejected":true, "Done":false}
  const [invisible, setInvisible] = React.useState(hashValues[statusPatient]);
  //Open and close Dialog to validate changes
  const [open, setOpen] = React.useState(false);
  const handleBadgeVisibility = () => {
    setOpen(true);
  };
  //On change if user is agree we change it and close Dialog
  const handleAgree = () =>{
    setInvisible(!invisible);
    setOpen(false);
  }
  //Otherway we just close Dialog
  const handleDisagree = ()=>{
    setOpen(false);
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
        <Badge color="primary" variant="dot" invisible={invisible}>
        <AccountBoxIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
          label={statusPatient}
        />
      </div>
     
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="change-status">
          {"Are you sure you want to update the status of your patient?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleDisagree}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
    
  );
}
