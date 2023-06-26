import { useEffect, useState } from 'react';
import { fetchTop100Podcasts } from '../services/itunesClient';

const usePodcastsData = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const loadPodcasts = async () => {
      const storedPodcasts = localStorage.getItem('podcasts');
      const parsedPodcasts = storedPodcasts ? JSON.parse(storedPodcasts) : null;
      const lastRequestTime = localStorage.getItem('lastRequestTime');
      const currentTime = new Date().getTime();

      if (parsedPodcasts && lastRequestTime && currentTime - lastRequestTime <= 24 * 60 * 60 * 1000) {
        // Los podcasts están almacenados y no ha pasado un día desde la última solicitud
        setPodcasts(parsedPodcasts);
      } else {
        try {
          const data = await fetchTop100Podcasts();
          setPodcasts(data.feed.entry);
          localStorage.setItem('podcasts', JSON.stringify(data.feed.entry));
          localStorage.setItem('lastRequestTime', currentTime);
          console.log('Los datos han sido actualizados');
        } catch (error) {
          console.error('Error al cargar los podcasts:', error);
        }
      }
    };

    loadPodcasts();
  }, []);

  return podcasts;
};

export default usePodcastsData;
