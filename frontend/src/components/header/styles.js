import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.light,
  },
  headerIcon: {
    padding: theme.spacing(1),
  },
  headerBtn: {
    color: theme.palette.primary.light,
    marginRight: theme.spacing(1),
  },
  linkDecoration: {
    textDecoration: 'none',
    color: '#FFF',
  },
}));
