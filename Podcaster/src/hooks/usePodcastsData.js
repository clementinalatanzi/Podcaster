import { useEffect, useState } from 'react';
import { mappingTop100Podcast } from '../services/utils/mappingTop100Podcast';
import { setDataLocalStorage } from '../services/utils/setDataLocalStorage';
import { getDataLocalStorage } from '../services/utils/getDataLocalStorage';


const usePodcastsData = (setIsLoading, storageKey, getDataFunction, ...getDataParams) => {
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {

   const loadPodcasts = async () => {
      const timeKey = 'lastRequestTime'
      const parsedPodcasts = getDataLocalStorage(storageKey, timeKey)
      if (parsedPodcasts) {
        setPodcasts(parsedPodcasts)
      } else {
        setIsLoading(true)
        try {

          const mappingData = await getDataOfApi(getDataFunction, getDataParams)
          setPodcasts(mappingData);
          setDataLocalStorage(storageKey, mappingData, timeKey)


        } catch (error) {
          console.error('Error loading podcasts:', error);
        }
        setIsLoading(false)
      }
    };

    loadPodcasts();
  }, [storageKey, getDataFunction, ...getDataParams]);

  return podcasts;
};

async function getDataOfApi(getDataFunction, getDataParams) {

  const data = await getDataFunction(...getDataParams);
  console.log("DATA", data)
  const mappingData = mappingTop100Podcast(data.feed.entry)
  console.log('Los datos han sido actualizados');
  return mappingData
}

export default usePodcastsData;
