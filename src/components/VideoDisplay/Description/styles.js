import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    borderBottomLeftRadius: '.25em',
    borderBottomRightRadius: '.25em',
    padding: '10px',
    height: '29%',
  },
}));

export default useStyles;
