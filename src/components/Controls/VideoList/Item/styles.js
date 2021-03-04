import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '5px',
    border: `1px solid ${theme.palette.grey[300]}`,
  },
  over: {
    background:
      theme.palette.type === 'dark'
        ? 'rgba(255, 255, 255, .3)'
        : 'rgba(0, 0, 0, .3)',
    color: theme.palette.common.white,
  },
}));

export default useStyles;
