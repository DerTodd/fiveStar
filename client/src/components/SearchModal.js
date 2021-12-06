import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Fingerprint from "@mui/icons-material/Fingerprint";
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { InputAdornment } from "@mui/material";
/*

IMPORT QUERY TO FIND DRINKS BASED ON SEARCH

*/
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };    

/*
 * QUERY MADE HERE THEN MAPPED OVER AND STORED IN STATE OR OBJECT 
 * 
 */
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Search Drinks
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Box sx={{ pl: "1rem" }} component="form" >
            <TextField
              variant="outlined"
              endAdornment
              sx={{ disableUnderline: true }}
              margin="normal"
              required
              fullWidth
              name="searchInput"
              label="Search"
              type="searchInput"
              id="searchInput"
              autoComplete="search"
              //onClick={HandleSearch}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                      <IconButton 
              aria-label="fingerprint" 
              color="secondary"
              type='submit'
              >
                <Fingerprint/>
              </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        {/* MAP OVER QUERY AND CREATE A LISTITEM FOR EACH RESULT
        
        */}
          <ListItem button>
              {/* EACH WILL BE COINTAINED IN BUTTON THAT LINKS TOO SINGLE RESULT PAGE?? */}
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}