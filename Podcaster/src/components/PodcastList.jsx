import React, { useState, useEffect } from 'react';
import { Podcast } from './Podcast';
import usePodcastFilter from '../hooks/usePodcastFilter';
import usePodcastsData from '../hooks/usePodcastsData';

export function PodcastList() {
 const podcasdList = usePodcastsData();

  
  const fieldsToFilter = ['im:name', 'im:artist']; 
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
  )
}