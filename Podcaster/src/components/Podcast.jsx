export function Podcast({id,title, autor,urlImage}){

    return(
        <>     
        <img src ={urlImage}  alt='podcast cover'></img>
        <h3>{title}</h3>
        <h4>{autor}</h4>
        </>
        
    )
}