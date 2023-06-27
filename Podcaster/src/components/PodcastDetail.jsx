import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SummaryPodcast from './SummaryPodcastUI';
import PodcastEpisodes from './PodcastDetailUI';
import { fetchPodcastData } from '../services/fetchPodcastsData';
import './PodcastDetail.css'

export function PodcastDetail({setIsLoading}) {

  const location = useLocation();
  const [error, setError] = useState(false)
  const { urlImage, title, description } = location.state || {};
  

  const { id } = useParams();

  const [podcastDetail, setPodcastDetail] = useState(false);
  
  
  useEffect(() => {
    
    const fetchPodcastDetail = async () => {
      try {
        setIsLoading(true)
        setError(false)
        const podcastData = await fetchPodcastData(id);
        setIsLoading(false)
        setPodcastDetail(podcastData);
      } catch (error) {
        setIsLoading(false)
        console.error("Unable to fetch podcast details", error)  
        setError(true)
      }
    };

    fetchPodcastDetail();
  }, []);
  
 
  return (
    podcastDetail ? (
      <div className='podcast-detail-container'>
        <div className= 'summary-podcast'>
        <SummaryPodcast  urlImage={urlImage} title={title} description={description} id={id} />
        </div>
        <div className='podcast-episodes'>
        <PodcastEpisodes episodes={podcastDetail.episodes} urlImage={urlImage} title={title} description={description} id={id} />
        </div>
      </div>) :(error ? (
        <div>
        <h3 className='error-text'>¡Ups!</h3>
        <h3 className='error-text'>Unfortunately, the podcast information could not be loaded at the moment.</h3>
        <h3 className='error-text'>Please try again later.</h3>
      </div>) : <div></div>)
    

  )
}

