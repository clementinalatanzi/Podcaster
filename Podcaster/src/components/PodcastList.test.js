import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import { PodcastList } from './PodcastList';

jest.mock('../services/itunesClient', () => ({
  fetchPodcasts: jest.fn().mockResolvedValue({
    feed: {
      entry: [
        {
          id: { label: '1' },
          'im:name': { label: 'Podcast 1' },
          'im:artist': { label: 'Author 1' },
          'im:image': [
            {
              label: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
              attributes: { height: '55' },
            },
            {
              label: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
              attributes: { height: '60' },
            },
            {
              label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
              attributes: { height: '170' },
            },
          ],
        },
        {
          id: { label: '2' },
          'im:name': { label: 'Podcast 2' },
          'im:artist': { label: 'Author 2' },
          'im:image': [
            {
              label: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
              attributes: { height: '55' },
            },
            {
              label: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
              attributes: { height: '60' },
            },
            {
              label: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
              attributes: { height: '170' },
            },
          ],
        },
      ],
    },
  }),
}));

describe('PodcastList', () => {
  test('renders podcasts correctly', async () => {
    render(<PodcastList />);

    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(2);

      // Test individual podcast properties
      expect(podcastElements[0]).toHaveTextContent('Podcast 1');
      expect(podcastElements[0]).toHaveTextContent('Author 1');
      expect(podcastElements[0].querySelector('img')).toHaveAttribute(
        'src',
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png'
      );

      expect(podcastElements[1]).toHaveTextContent('Podcast 2');
      expect(podcastElements[1]).toHaveTextContent('Author 2');
      expect(podcastElements[1].querySelector('img')).toHaveAttribute(
        'src',
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png'
      );
    });
  });

  test('filters podcasts by  author and title', async () => {
    render(<PodcastList />);
  
    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(2);
    });
  
    fireEvent.change(screen.getByPlaceholderText('Buscar podcasts...'), { target: { value: 'Podcast 1' } });
  
    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(1);
      expect(podcastElements[0]).toHaveTextContent('Podcast 1');
      expect(podcastElements[0]).toHaveTextContent('Author 1');
      expect(podcastElements[0].querySelector('img')).toHaveAttribute(
        'src',
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png'
      );
    });
  
    fireEvent.change(screen.getByPlaceholderText('Buscar podcasts...'), { target: { value: 'Author 2' } });
  
    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(1);
      expect(podcastElements[0]).toHaveTextContent('Podcast 2');
      expect(podcastElements[0]).toHaveTextContent('Author 2');
      expect(podcastElements[0].querySelector('img')).toHaveAttribute(
        'src',
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png'
      );
    });
  });
  
});
