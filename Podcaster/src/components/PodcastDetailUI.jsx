import React from 'react';
import { calculateTimeInMinutes, formatDate } from '../utils/utils/formatTime';

const PodcastDetailUI = ({ episodes }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
      <div>
        <h1 className='border-container '> EPISODES: {episodes.length}</h1>
        <div className='border-container'>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map(episodio => (
                <tr key={episodio.episodeGuid}>
                  <td>{episodio.trackName}</td>
                  <td>{formatDate(episodio.releaseDate)}</td>
                  <td>{calculateTimeInMinutes(episodio.trackTimeMillis)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailUI;
