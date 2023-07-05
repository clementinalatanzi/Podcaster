import { useLocation, useParams } from 'react-router-dom';
import SummaryPodcast from './SummaryPodcastUI';
import PodcastEpisodes from './PodcastDetailUI';
import './PodcastDetail.css'
import { usePodcastDetailData } from '../hooks/usePodcastDetailData';


export function PodcastDetail({setIsLoading}) {

  const location = useLocation();
  const { urlImage, title, description } = location.state || {};
  const { id } = useParams();
  const {podcastDetail, error} = usePodcastDetailData({setIsLoading,id})
 
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

