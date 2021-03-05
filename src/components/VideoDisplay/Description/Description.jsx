import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Description = ({ videoSelected }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        {videoSelected.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {videoSelected.description}
      </Typography>
    </Grid>
  );
};

export default Description;
