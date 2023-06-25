import { useState, useEffect } from 'react';
import { Podcast } from './Podcast';
import { fetchPodcasts } from '../services/itunesClient';

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

  return (
    <>
      <h1>PodcastList</h1>
      <ul>
        {podcasts.map((podcast) => (
          <section key={podcast.id.label}>
            <div className="section-overlay"></div>
            <div className="section-container">
              <Podcast
                id={podcast.id.label}
                title={podcast['im:name'].label}
                author={podcast['im:artist'].label}
                urlImage={podcast['im:image'][2].label}
              />
            </div>
          </section>
        ))}
      </ul>
    </>
  );
}
