import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h2: {
    fontWeight: theme.typography.fontWeightLight,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
