import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { calculateTimeInMinutes, formatDate } from '../utils/Date/formatTime';
import { fetchPodcastsDetail } from '../services/itunesClient';

export function PodcastDetail() {

  const location = useLocation();
  console.log("location", location)
  const { urlImage, title, description, route } = location.state || {};


  const { id } = useParams();

  const [podcastDetail, setPodcastDetail] = useState(null);

  useEffect(() => {

    const fetchPodcastDetail = async () => {

      try {
        const data = await fetchPodcastsDetail(id)
        const dataParse = JSON.parse(data.contents)
        console.log("dataParseee ", dataParse);

        const podcastDataDetail = {
          title: dataParse.results[0].collectionCensoredName,
          autor: dataParse.results[0].artistName,
          episodes: dataParse.results.slice(1)
        }
        localStorage.setItem(id, JSON.stringify(podcastDataDetail));
        console.log("datapodcastDataDetail Parser", podcastDataDetail);

        setPodcastDetail(podcastDataDetail);
      } catch (error) {
        console.error('Error fetching podcast detail:', error);
      }
    };

    fetchPodcastDetail();
  }, []);


  return (
    podcastDetail ? (
      <>
        <div>
            <img className='summaryImg' src={urlImage}></img>
            <h3> {title}</h3>
            <h3>Description</h3>
            <p>{description}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
          <div>
            <h1 className='border-container '> EPISODES: {podcastDetail.episodes.length}</h1>
            <div className='border-container'>
              <table >
                <thead>
                  <tr>
                    <th>Title</th>
                    <th> Date</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {podcastDetail.episodes.map(episodio => (

                    <tr key={episodio.episodeGuid}>

                      <td>
                        {episodio.trackName}

                      </td>
                      <td>{formatDate(episodio.releaseDate)}</td>
                      <td>{calculateTimeInMinutes(episodio.trackTimeMillis)}</td>
                    </tr>

                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>) :
      <div></div>

  )
}

