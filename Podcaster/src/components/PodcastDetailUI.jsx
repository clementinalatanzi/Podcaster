import React from 'react';
import { calculateTimeInMinutes, formatDate } from '../utils/utils/formatTime';
import { Link } from 'react-router-dom';

const PodcastDetailUI = ({ episodes, urlImage, title, description, id }) => {
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
                  <td>
                    <Link to={`/podcast/${id}/episode/${episodio.episodeGuid}`}
                      state={{
                        urlImage: urlImage,
                        title: title,
                        description: description,
                        id:id
                      }}>
                      {episodio.trackName}
                    </Link>
                  </td>
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
