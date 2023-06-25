import React, { useState, useEffect } from 'react';
import { Podcast } from './Podcast';
import { fetchPodcasts } from '../services/itunesClient';
import usePodcastFilter from '../hooks/usePodcastFilter';

export function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);


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

  const fieldsToFilter = ['im:name', 'im:artist']; // Campos para realizar el filtrado

  const { filteredData, handleFilterTextChange, filterText } = usePodcastFilter(podcasts, fieldsToFilter);


  return (
    <>
      <div className='filter-container'>
        <input
          type="text"
          value={filterText}
          onChange={handleFilterTextChange}
          placeholder="Buscar podcasts..."
        />
      </div>
      <h1>PodcastList</h1>
      <ul>
        {filteredData.map((podcast) => (
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
