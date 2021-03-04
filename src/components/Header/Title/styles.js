import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h2: (props) => ({
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily,
    color:
      theme.palette.type === 'dark'
        ? theme.palette.common.white
        : theme.palette.primary.main,
    textTransform: 'uppercase',
    ...(props.style && props.style),
  }),
}));

export default useStyles;
