import { Link } from 'react-router-dom';

export function Header(){
    return(
    <Link to = '/'>    
    <main className="header-main">
        <h1 className="header-main">Podcaster</h1>
    </main>
    </Link>
    )
}