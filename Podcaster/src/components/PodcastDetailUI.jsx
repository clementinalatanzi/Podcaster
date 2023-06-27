import React from 'react';
import { calculateTimeInMinutes, formatDate } from '../utils/Date/formatTime';
import { Link } from 'react-router-dom';
import './PodcastDetailUI.css'
const PodcastDetailUI = ({ episodes, urlImage, title, description, id }) => {
  return (
    <div>
      <div className="border-container">
        <h1>EPISODES: {episodes.length}</h1>
        </div>
        <div className="border-container">
        <div className="episode-table-list">
          <div className="episode-table-item titles">
            <div className="episode-table-title">Title</div>
            <div className="episode-table-details">
              <div>Date</div>
              <div>Duration</div>
            </div>
          </div>
          {episodes.map((episodio, index) => (
            <div
              key={episodio.trackId}
              className={`episode-table-item ${index % 2 === 0 ? 'even' : 'odd'}`}
            >
              <div className="episode-table-title">
                <Link
                  to={`/podcast/${id}/episode/${episodio.trackId}`}
                  state={{
                    urlImage: urlImage,
                    title: title,
                    description: description,
                    id: id,
                  }}
                >
                  {episodio.trackName}
                </Link>
              </div>
              <div className="episode-table-details">
                <div>{formatDate(episodio.releaseDate)}</div>
                <div>{calculateTimeInMinutes(episodio.trackTimeMillis)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetailUI;
