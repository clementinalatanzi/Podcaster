import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPodcasts } from './itunesClient';

describe('fetchPodcasts', () => {
  const mock = new MockAdapter(axios);

  test('should handle error when fetching podcasts', async () => {
    const errorMessage = 'Network Error';
    mock.onGet('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').networkError();

    //"Verify that the function throws an error."

    await expect(fetchPodcasts()).rejects.toThrow(errorMessage);
  });

  test('should return a list of podcasts with length greater than 1 on successful response', async () => {
    const responseData = {
      feed: {
        entry: [
          { id: { label: '1' }, name: { label: 'Podcast 1' } },
          { id: { label: '2' }, name: { label: 'Podcast 2' } },
        ],
      },
    };
    mock.onGet('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').reply(200, responseData);

    //Call the function and verify the length of the returned data."
    const data = await fetchPodcasts();
    expect(data.feed.entry.length).toBeGreaterThan(1);
  });
});

  