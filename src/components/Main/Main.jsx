import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { VideoDisplay } from 'components/VideoDisplay';
import { VideoList } from 'components/VideoList';

import useStyles from './styles';

const videoInfo = {
  description:
    "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge. Licensed under the Creative Commons Attribution license http://www.bigbuckbunny.org",
  sources: [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  ],
  subtitle: 'By Blender Foundation',
  thumb: 'images/BigBuckBunny.jpg',
  title: 'Big Buck Bunny',
};

const Main = () => {
  const videoRef = useRef();
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.root}>
      <VideoDisplay video={videoInfo} videoRef={videoRef} />
      <VideoList />
    </Grid>
  );
};

export default Main;
