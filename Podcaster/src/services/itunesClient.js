import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com';
const TOP_PODCASTS_ENDPOINT = '/us/rss/toppodcasts/limit=100/genre=1310/json';

export async function fetchTop100Podcasts() {
  try {
    const response = await axios.get(BASE_URL + TOP_PODCASTS_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar los podcasts:', error);
    throw error;
  }
}

