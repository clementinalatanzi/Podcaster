import { Link } from "react-router-dom";


function SummaryPodcast({ urlImage, title, description, id }) {

  const route = `/podcast/${id}`
  
  return (
    <div className='border-container'>
      <Link to={route}
        state={{
          urlImage: urlImage,
          title: title,
          description: description,
        }}>
        <img className='summaryImg' src={urlImage} alt="Podcast Cover"></img>

        <h3>{title}</h3>
        <h3>Description</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default SummaryPodcast;
