import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  productBox: {
    minHeight: '60vh',

    marginTop: '30px',
  },
  imageBox: {
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  productContent: {
    position: 'relative',
  },
  productDetails: {
    padding: theme.spacing(2),
  },
  productActions: {
    width: '100%',
    backgroundColor: 'rgb(45,45,45)',
    padding: theme.spacing(2),
    color: '#FFF',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',

    top: '422px',
  },
  button: {
    backgroundColor: '#FFF',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: '#FFF',
    },
  },
}));
