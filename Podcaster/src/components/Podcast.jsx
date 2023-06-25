export function Podcast({id,title, author,urlImage}){

    return(
        <>     
        <img src ={urlImage}  alt='podcast cover'></img>
        <h3>{title}</h3>
        <h4>{author}</h4>
        </>
        
    )
}