import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import useFetchVideos from 'hooks/useFetchVideos';
import { VideoDisplay } from 'components/VideoDisplay';
import { Controls } from 'components/Controls';
import useStyles from './styles';

const Main = () => {
  const URL = 'https://api.jsonbin.io/b/60340fc4f1be644b0a63433c';
  const { data, loading } = useFetchVideos(URL);
  const videoRef = useRef();
  const classes = useStyles();

  return (
    <Grid container item xs={12} className={classes.root}>
      {data.length ? (
        <>
          <VideoDisplay videoRef={videoRef} loading={loading} />
          <Controls videos={data} loading={loading} videoRef={videoRef} />
        </>
      ) : (
        <Grid
          container
          item
          xs={12}
          style={{ height: '100%' }}
          alignItems="center"
          justify="center"
        >
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default Main;
