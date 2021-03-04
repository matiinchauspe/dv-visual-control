import { useState } from 'react';

const useGeneralState = () => {
  const [state, setState] = useState({
    videos: [],
    selected: null, // initial with the first video of the list
    prevSelected: null,
  });

  const fillInitialState = ({ videos, selected }) => {
    setState({
      ...state,
      videos,
      selected,
    });
  };

  const selectVideo = (payload) => {
    setState({
      ...state,
      selected: payload,
      prevSelected: state.selected,
    });
  };

  return {
    fillInitialState,
    selectVideo,
    state,
  };
};

export default useGeneralState;
