import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchVideos = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // NOTE: Error state for a future error handler
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios(endpoint);
      setData(
        response.data.categories[0].videos.map((video, index) => ({
          ...video,
          id: `${video.title.replace(/\s/g, '')}_${index}`,
        }))
      );
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchVideos;
