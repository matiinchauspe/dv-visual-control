import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    padding: '10px',
    height: '7vh',
    position: 'fixed',
    bottom: 0,
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey.A700
        : theme.palette.common.white,
  },
  text: {
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.primary.main,
  },
}));

export default useStyles;
