import { useEffect, useState } from 'react';
import {mappingTop100Podcast}  from '../utils/Podcast/mappingTop100Podcast';
import { calculateDateDifference } from '../utils/Date/dateUtils';


const usePodcastsData = (storageKey, fetchDataFunction, ...fetchDataParams) => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const loadPodcasts = async () => {
      
      const storedPodcasts = localStorage.getItem(storageKey);
      const parsedPodcasts = storedPodcasts ? JSON.parse(storedPodcasts) : null;
      
      const lastRequestTime = localStorage.getItem('lastRequestTime');
      const currentTime = new Date().getTime();

        
      if (parsedPodcasts && 
          lastRequestTime &&
          calculateDateDifference(currentTime,lastRequestTime)) {
        // Los podcasts están almacenados y no ha pasado un día desde la última solicitud
        setPodcasts(parsedPodcasts);
      } else {
        try {
          const data = await fetchDataFunction(...fetchDataParams);
          const mappingData= mappingTop100Podcast(data.feed.entry)
          setPodcasts(mappingData);
          localStorage.setItem(storageKey, JSON.stringify(mappingData));
          localStorage.setItem('lastRequestTime', currentTime);
          console.log('Los datos han sido actualizados');
        } catch (error) {
          console.error('Error al cargar los podcasts:', error);
        }
      }
    };

    loadPodcasts();
  }, [storageKey, fetchDataFunction, ...fetchDataParams]);

  return podcasts;
};

export default usePodcastsData;
