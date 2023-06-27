import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { PodcastList } from './PodcastList';

const mockedUsePodcastsData = jest.spyOn(require('../hooks/usePodcastsData'), 'default');
mockedUsePodcastsData.mockReturnValue([
    {
      id: '1',
      title: 'Podcast 1',
      author: 'Author 1', 
      urlImage: 'url 1'
    },
    {
      id: '2',
      title: 'Podcast 2',
      author: 'Author 2',
      urlImage: 'url 2'
    }
  ])

describe('PodcastList', () => {
  test('renders podcasts correctly', async () => {
    render( <MemoryRouter>
      <PodcastList />
    </MemoryRouter>);

    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(2);

      // Test individual podcast properties
      expect(podcastElements[0]).toHaveTextContent('Podcast 1');
      expect(podcastElements[0]).toHaveTextContent('Author 1');
      expect(podcastElements[0].querySelector('img')).toHaveAttribute(
        'src',
        'url 1'
      );

      expect(podcastElements[1]).toHaveTextContent('Podcast 2');
      expect(podcastElements[1]).toHaveTextContent('Author 2');
      expect(podcastElements[1].querySelector('img')).toHaveAttribute(
        'src',
        'url 2'
      );
    });
  });

  test('filters podcasts by author and title', async () => {
    render(  <MemoryRouter>
      <PodcastList />
    </MemoryRouter>);
  
    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(2);
    });
                                                 
    fireEvent.change(screen.getByPlaceholderText("Filter podcasts..."), { target: { value: 'Podcast 1' } });
  
    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(1);
      expect(podcastElements[0]).toHaveTextContent('Podcast 1');
      expect(podcastElements[0]).toHaveTextContent('Author 1');
      expect(podcastElements[0].querySelector('img')).toHaveAttribute(
        'src',
        'url 1'
      );
    });
  
    fireEvent.change(screen.getByPlaceholderText('Filter podcasts...'), { target: { value: 'Author 2' } });
  
    await waitFor(() => {
      const podcastElements = screen.getAllByTestId('podcast');
      expect(podcastElements).toHaveLength(1);
      expect(podcastElements[0]).toHaveTextContent('Podcast 2');
      expect(podcastElements[0]).toHaveTextContent('Author 2');
      expect(podcastElements[0].querySelector('img')).toHaveAttribute(
        'src',
        'url 2'
      );
    });
  });
});
