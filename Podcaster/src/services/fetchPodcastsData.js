import { getDataLocalStorage } from './utils/getDataLocalStorage';
import { setDataLocalStorage } from './utils/setDataLocalStorage';
import { fetchPodcastsDetail } from './itunesClient';

/**/

export const fetchPodcastData = async (id) => {
  try {
    const timeKey = id + 'time'
    const dataLocalStora = getDataLocalStorage(id, timeKey)
    if (dataLocalStora) {
      return dataLocalStora
    }
    const data = await fetchPodcastsDetail(id);
    const dataParse = JSON.parse(data.contents);
    const podcastDataDetail = mappingPodcastDetail(dataParse)
    setDataLocalStorage(id, podcastDataDetail, timeKey)


    return podcastDataDetail;
  } catch (error) {
    console.error('Error fetching podcast detail:', error);
    throw error;
  }
};

function mappingPodcastDetail(data) {
  const podcastData =
  {
    title: data.results[0].collectionCensoredName,
    autor: data.results[0].artistName,
    episodes: data.results.slice(1),
  }

  return podcastData

}
