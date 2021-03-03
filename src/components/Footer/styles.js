import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    padding: '10px',
    height: '7vh',
    color: theme.palette.grey.light,
    position: 'fixed',
    bottom: 0,
  },
}));

export default useStyles;
