import React, { useState, useEffect } from 'react';
import { Podcast } from './Podcast';
import usePodcastFilter from '../hooks/usePodcastFilter';
import usePodcastsData from '../hooks/usePodcastsData';
import { fetchTop100Podcasts } from '../services/itunesClient';

export function PodcastList() {
 
 const storageKey = 'podcasts';
 const podcasdList = usePodcastsData(storageKey, fetchTop100Podcasts);

  const fieldsToFilter = ['title', 'author']; 
  const { filteredData, handleFilterTextChange, filterText } = usePodcastFilter(podcasdList, fieldsToFilter);


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
          <section key={podcast.id} data-testid="podcast">
            <div className="section-overlay"></div>
            <div className="section-container">
              <Podcast
                id={podcast.id}
                title={podcast.title}
                author={podcast.author}
                urlImage={podcast.urlImage}

              />
            </div>
          </section>
        ))}
      </ul>
    </>
  )
}