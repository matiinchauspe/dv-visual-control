import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    flexShrink: 0,
    height: '7vh',
  },
  switch: {
    width: 45,
    height: 26,
    borderRadius: '.75em',
    padding: 0,
    margin: '18px',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.primary.light
        : theme.palette.common.white,
  },
  switchBase: {
    padding: 1,
  },
}));

export default useStyles;
