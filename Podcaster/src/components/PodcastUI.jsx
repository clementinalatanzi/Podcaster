import './PodcastUI.css'
          
export function PodcastUI({id,title, author,urlImage}){

    return(
        <>         
        <img src ={urlImage}  alt='podcast cover'></img>
        <h3>{title}</h3>
        <h4 className='author'>Author: {author}</h4>
        </>
        
    )
}