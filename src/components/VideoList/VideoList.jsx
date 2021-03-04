import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppContext from 'context/AppContext';
import { Item } from './Item';
import useStyles from './styles';

const VideoList = ({ videos, loading }) => {
  const { fillInitialState } = useContext(AppContext);
  const classes = useStyles();

  useEffect(() => {
    fillInitialState({ videos, selected: videos[0] });
  }, [videos]);

  return (
    <Grid
      container
      item
      xs={4}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        videos.map((video) => <Item key={video.id} video={video} />)
      )}
    </Grid>
  );
};

export default VideoList;
