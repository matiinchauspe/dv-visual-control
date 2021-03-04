import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
    height: '12%',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey.A400
        : theme.palette.grey[100],
    marginTop: 5,
    borderTopLeftRadius: '.25em',
    borderTopRightRadius: '.25em',
  },
  icon: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
