import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    height: '7vh',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey.A700
        : theme.palette.common.white,
  },
  image: {
    borderRadius: '.25em',
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
