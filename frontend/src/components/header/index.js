import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Container } from '@material-ui/core';

import useStyles from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Container>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='#FFF'
              aria-label='menu'
            >
              <i className='fas fa-flag-usa'></i>
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              <Link to='/' className={classes.linkDecoration}>
                New Yorkers US
              </Link>
            </Typography>

            <Button className={classes.headerBtn}>
              <i className={`${classes.headerIcon} fas fa-shopping-cart`}> </i>
              <Link to='/cart' className={classes.linkDecoration}>
                Cart
              </Link>
            </Button>
            <Button className={classes.headerBtn}>
              <i className={`${classes.headerIcon} fas fa-sign-in-alt`}></i>

              <Link to='/signin' className={classes.linkDecoration}>
                Sign in
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
