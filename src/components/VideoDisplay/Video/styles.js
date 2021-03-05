import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '71%',
  },
  video: {
    objectFit: 'cover',
    borderTopLeftRadius: '.25em',
    borderTopRightRadius: '.25em',
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
}));

export default useStyles;
