import React from 'react';
import { AppBar, Toolbar, Button, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from './DrawerComp';

const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: 'grey', boxShadow: 'none' }}>
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Button sx={{ marginLeft: 'auto' }} variant="contained">
                Create
              </Button>
              <Button sx={{ marginLeft: '10px' }} variant="contained">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
