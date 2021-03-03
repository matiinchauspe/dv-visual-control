import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 0,
    height: '85vh',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
}));

export default useStyles;
