import React, { useState, useEffect } from 'react';
import { PodcastUI } from './PodcastUI';
import usePodcastFilter from '../hooks/usePodcastFilter';
import usePodcastsData from '../hooks/usePodcastsData';
import { getTop100Podcasts} from '../services/itunesClient';
import { Link } from 'react-router-dom';
import './PodcastList.css'

export function PodcastList({setIsLoading}) {
 
  
 const storageKey = 'podcasts';
 const podcasdList = usePodcastsData(setIsLoading, storageKey, getTop100Podcasts);

  const fieldsToFilter = ['title', 'author']; 
  const { filteredData, handleFilterTextChange, filterText } = usePodcastFilter(podcasdList, fieldsToFilter);

  return (
    <>
          
      <div className='filter-container'>
        <button className="azul-button">{filteredData.length}</button>
        <input
          type="text"
          value={filterText}
          onChange={handleFilterTextChange}
          placeholder="Filter podcasts..."
        />
      </div>
      <div className="podcast-grid">
        {filteredData.map((podcast) => (
          <section key={podcast.id} data-testid="podcast">
            <div className="border-container">
            <Link to={ `/podcast/${podcast.id}`}
                                state={ { urlImage: podcast.urlImage, 
                                          title: podcast.title, 
                                          description: podcast.description, 
                                          id: podcast.id
                                     } }>
              <PodcastUI
                id={podcast.id}
                title={podcast.title}
                author={podcast.author}
                urlImage={podcast.urlImage}
             
              />
               </Link>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}