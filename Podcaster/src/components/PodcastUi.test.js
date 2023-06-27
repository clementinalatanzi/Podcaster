import React from 'react';
import { render, screen } from '@testing-library/react';
import { PodcastUI } from './PodcastUI';
import '@testing-library/jest-dom/extend-expect';

describe('PodcastUI', () => {
  test('renders podcast information correctly', () => {
    const id = '1';
    const title = 'Podcast 1';
    const author = 'Author 1';
    const urlImage = 'url 1';

    render(<PodcastUI id={id} title={title} author={author} urlImage={urlImage} />);

    const podcastImage = screen.getByAltText('podcast cover');
    const podcastTitle = screen.getByText('Podcast 1');
    const podcastAuthor = screen.getByText('Author: Author 1');

    expect(podcastImage).toHaveAttribute('src', 'url 1');
    expect(podcastTitle).toBeInTheDocument();
    expect(podcastAuthor).toBeInTheDocument();
  });
});
