import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '5px',
    border: `1px solid ${theme.palette.grey[300]}`,
  },
}));

export default useStyles;
