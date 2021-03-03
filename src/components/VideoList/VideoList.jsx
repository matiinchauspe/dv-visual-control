import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import useFetch from 'hooks/useFetch';
import { Item } from './Item';
import useStyles from './styles';

const VideoList = () => {
  const URL = 'https://api.jsonbin.io/b/60340fc4f1be644b0a63433c';
  const { data, loading } = useFetch(URL);
  const classes = useStyles();
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
        data.map((video) => (
          <Item
            key={video.title}
            title={video.title}
            subtitle={video.subtitle}
            thumbPath={video.thumb}
            sources={video.sources}
          />
        ))
      )}
      {}
    </Grid>
  );
};

export default VideoList;
