import { useLocation, useParams } from 'react-router-dom';
import SummaryPodcast from './SummaryPodcastUI';

export function Episode() {

    const idEpisode = useParams()
    const podcastDetail = JSON.parse(localStorage.getItem(idEpisode.id));
    const location = useLocation();
    console.log("location episodio", location)
    const { urlImage, title, description,id } = location.state || {};
  

    const episodeSelected = podcastDetail.episodes.filter(episode => episode.episodeGuid === idEpisode.epid)

    return (
        <>
            <div className='episode-container'>
                <div>
                    <SummaryPodcast title={title} description={description} urlImage={urlImage} id= {id}/>
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