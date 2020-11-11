import React from 'react';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <p>Copyright &copy; New Yorkers US </p>
      </footer>
    </>
  );
};

export default Footer;
