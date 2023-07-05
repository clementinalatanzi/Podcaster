import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com';
const ALL_ORIGINS_ENDPOINT = 'https://api.allorigins.win/get';
const TOP_PODCASTS_ENDPOINT = '/us/rss/toppodcasts/limit=100/genre=1310/json';

export async function getTop100Podcasts() {
  try {
    const response = await axios.get(BASE_URL + TOP_PODCASTS_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error retrieving podcasts:', error);
    throw error;
  }
}

export async function getPodcastsDetail(id) {
  const PODCAST_ENDPOINT = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
  const fetchURL = `${ALL_ORIGINS_ENDPOINT}?url=${encodeURIComponent(PODCAST_ENDPOINT)}`;

  try {
    const response = await fetch(fetchURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error retrieving podcast details', error);
    throw error;
  }
}
