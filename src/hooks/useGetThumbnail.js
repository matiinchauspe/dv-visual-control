import { useState, useEffect } from 'react';

const useGetThumbnail = (videoUrl, thumbPath) => {
  const [thumb, setThumb] = useState('');

  useEffect(() => {
    const toIndex = videoUrl.lastIndexOf('/');
    const tempUrl = videoUrl.slice(0, toIndex);
    setThumb(`${tempUrl}/${thumbPath}`);
  }, []);

  return thumb;
};

export default useGetThumbnail;
