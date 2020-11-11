import { makeStyles } from '@material-ui/core/styles';
import theme from '../../myTheme';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '25rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  media: {
    height: '10rem',
  },
  content: {
    height: '12rem',
  },
  productPrice: {
    marginTop: '5px',
  },
}));
