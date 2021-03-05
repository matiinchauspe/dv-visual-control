import { useState } from 'react';

const useGeneralState = () => {
  const [state, setState] = useState({
    videos: [],
    selected: null, // initial with the first video of the list
  });

  const fillInitialState = ({ videos, selected }) => {
    setState({
      ...state,
      videos,
      selected,
    });
  };

  const selectVideo = (payload) => {
    const getVideoIndex = state.videos.findIndex(
      (video) => video.id === payload.id
    );
    const videos = [
      payload,
      ...state.videos.slice(0, getVideoIndex),
      ...state.videos.slice(getVideoIndex + 1),
    ];

    setState({
      ...state,
      videos,
      selected: payload,
    });
  };

  return {
    fillInitialState,
    selectVideo,
    state,
  };
};

export default useGeneralState;
