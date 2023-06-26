import { useEffect, useState } from 'react';
import { mappingTop100Podcast } from '../services/utils/mappingTop100Podcast';
import { setDataLocalStorage } from '../services/utils/setDataLocalStorage';
import { getDataLocalStorage } from '../services/utils/getDataLocalStorage';


const usePodcastsData = (storageKey, fetchDataFunction, ...fetchDataParams) => {
    const [podcasts, setPodcasts] = useState([]);
    useEffect(() => {

        const loadPodcasts = async () => {
            const timeKey = 'lastRequestTime'
            const parsedPodcasts = getDataLocalStorage(storageKey, timeKey)
            if (parsedPodcasts) {
                setPodcasts(parsedPodcasts)
            } else {
                try {
                    const mappingData = await getDataOfApi(fetchDataFunction, fetchDataParams)
                    setPodcasts(mappingData);
                    setDataLocalStorage(storageKey,mappingData,timeKey)

                } catch (error) {
                    console.error('Error al cargar los podcasts:', error);
                }
            }
        };

        loadPodcasts();
    }, [storageKey, fetchDataFunction, ...fetchDataParams]);

    return podcasts;
};

async function getDataOfApi(fetchDataFunction, fetchDataParams) {

    const data = await fetchDataFunction(...fetchDataParams);
    const mappingData = mappingTop100Podcast(data.feed.entry)
    console.log('Los datos han sido actualizados');
    return mappingData
}

export default usePodcastsData;
