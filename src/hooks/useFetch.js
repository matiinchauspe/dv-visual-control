import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios(endpoint);
      setData(response.data.categories[0].videos);
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

export default useFetch;
