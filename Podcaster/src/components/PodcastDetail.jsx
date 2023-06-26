import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import SummaryPodcast from './SummaryPodcastUI';
import PodcastEpisodes from './PodcastDetailUI';
import { fetchPodcastData } from '../services/fetchPodcastsData';

export function PodcastDetail({setIsLoading}) {

  const location = useLocation();
  console.log("location", location)
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
        // Manejar el error si es necesario
      }
    };

    fetchPodcastDetail();
  }, []);


  return (
    podcastDetail ? (
      <>
        <SummaryPodcast urlImage={urlImage} title={title} description={description} id={id}/>
        <PodcastEpisodes episodes={podcastDetail.episodes} urlImage={urlImage} title={title} description={description} id={id}/>
      </>) :
      <div></div>

  )
}

