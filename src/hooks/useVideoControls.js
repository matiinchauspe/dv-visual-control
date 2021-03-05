const useVideoControls = (videoRef) => {
  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const playVideo = () => {
    videoRef.current.play();
  };

  const upVolume = () => {
    if (videoRef.current.volume <= 0.8) {
      if (videoRef.current.muted) {
        // eslint-disable-next-line no-param-reassign
        videoRef.current.muted = false;
      }
      // eslint-disable-next-line operator-assignment
      videoRef.current.volume = videoRef.current.volume + 0.2; // eslint-disable-line no-param-reassign
    }
  };

  const downVolume = () => {
    if (videoRef.current.volume >= 0.2) {
      // eslint-disable-next-line no-param-reassign
      videoRef.current.volume = videoRef.current.volume - 0.2; // eslint-disable-line operator-assignment
    }
  };

  return {
    pauseVideo,
    playVideo,
    downVolume,
    upVolume,
  };
};

export default useVideoControls;
