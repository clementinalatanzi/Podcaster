import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SummaryPodcast from './SummaryPodcastUI';
import PodcastEpisodes from './PodcastDetailUI';
import { fetchPodcastData } from '../services/fetchPodcastsData';
import './PodcastDetail.css'

export function PodcastDetail({setIsLoading}) {

  const location = useLocation();
  const { urlImage, title, description } = location.state || {};


  const { id } = useParams();

  const [podcastDetail, setPodcastDetail] = useState(null);

  useEffect(() => {
    
    const fetchPodcastDetail = async () => {
      try {
        setIsLoading(true)
        const podcastData = await fetchPodcastData(id);
        setIsLoading(false)
        setPodcastDetail(podcastData);
      } catch (error) {
        setIsLoading(false)
        console.error("Unable to fetch podcast details", error)  
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
      </div>) :
      <div></div>

  )
}

