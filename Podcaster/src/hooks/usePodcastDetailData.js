import { useEffect,useState } from "react";
import { getPodcastData } from "../services/getPodcastsData";

export function usePodcastDetailData({setIsLoading, id}){
    

    const [podcastDetail, setPodcastDetail] = useState(false);
    const [error, setError] = useState(false)
    
    useEffect(() => {
      
      const getPodcastDetail = async () => {
        try {
          setIsLoading(true)
          setError(false)
          const podcastData = await getPodcastData(id);
          setIsLoading(false)
          setPodcastDetail(podcastData);
        } catch (error) {
          setIsLoading(false)
          console.error("Unable to fetch podcast details", error)  
          setError(true)
        }
      };
  
      getPodcastDetail();
    }, []);
    return {podcastDetail, error}
  }