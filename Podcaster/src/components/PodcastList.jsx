import React, { useState, useEffect } from 'react';
import { Podcast } from './Podcast';
import { fetchPodcasts } from '../services/itunesClient';

export function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const loadPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data.feed.entry);
      } catch (error) {
        console.error('Error al cargar los podcasts:', error);
      }
    };

    loadPodcasts();
  }, []);

  const filteredPodcasts = podcasts.filter(podcast => {
    const titleMatch = podcast['im:name']?.label.toLowerCase().includes(filterText.toLowerCase());
    const authorMatch = podcast['im:artist']?.label.toLowerCase().includes(filterText.toLowerCase());
    return filterText === '' || titleMatch || authorMatch;
});

  return (
    <>
      <div className='filter-container'>
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Buscar podcasts..."
        />
      </div>
      <h1>PodcastList</h1>
      <ul>
        {filteredPodcasts.map((podcast) => (
          <section key={podcast.id.label} data-testid="podcast">
            <div className="section-overlay"></div>
            <div className="section-container">
              <Podcast
                id={podcast.id.label}
                title={podcast['im:name']?.label}
                author={podcast['im:artist']?.label}
                urlImage={podcast['im:image']?.[2]?.label}

              />
            </div>
          </section>
        ))}
      </ul>
    </>
  );
}
