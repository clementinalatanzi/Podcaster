import { useLocation, useParams } from 'react-router-dom';
import SummaryPodcast from './SummaryPodcastUI';
import './Episode.css'

export function Episode({ setIsLoading }) {

    const idEpisode = useParams()
     const location = useLocation();
    const { urlImage, title, description, id } = location.state || {};
    
    const podcastDetail = JSON.parse(localStorage.getItem(idEpisode.id));
    const episodeSelected = podcastDetail.episodes.filter(episode =>{ 
         return episode.trackId.toString() === idEpisode.epid.toString()
    })
  
     return (
        <>
            <div className='episode-container'>
                <div className='summary-podcast'>
                    <SummaryPodcast title={title} description={description} urlImage={urlImage} id={id} />
                </div>
                < div className='container-border'>
                    <div className='episode-details'>
                        <h1>{episodeSelected[0].trackName}</h1>
                        <div dangerouslySetInnerHTML={{ __html: episodeSelected[0].description }}></div>
                        <audio className="episode-audio" controls>
                            <source src={episodeSelected[0].episodeUrl} type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            </div>
        </>
    )

}