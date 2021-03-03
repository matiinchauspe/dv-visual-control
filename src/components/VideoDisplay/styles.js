import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
  },
  videoContainer: {
    height: '59vh',
  },
  video: {
    objectFit: 'cover',
    borderTopLeftRadius: '.25em',
    borderTopRightRadius: '.25em',
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  description: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    borderBottomLeftRadius: '.25em',
    borderBottomRightRadius: '.25em',
    padding: '10px',
    height: '25vh',
  },
}));

export default useStyles;
