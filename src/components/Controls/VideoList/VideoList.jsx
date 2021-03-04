import React, { useContext, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppContext from 'context/AppContext';
import { Item } from './Item';
import useStyles from './styles';

const VideoList = ({ videos: initialVideos, loading }) => {
  const {
    state: { videos },
    fillInitialState,
  } = useContext(AppContext);
  const videoListRef = useRef();
  const classes = useStyles();

  useEffect(() => {
    fillInitialState({ videos: initialVideos, selected: initialVideos[0] });
  }, []);

  const handleScrollMove = () => {
    setTimeout(() => {
      videoListRef.current.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    });
  };

  return (
    <Grid
      container
      item
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.root}
      ref={videoListRef}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        videos.map((video) => (
          <Item key={video.id} video={video} onScrollMove={handleScrollMove} />
        ))
      )}
    </Grid>
  );
};

export default VideoList;
