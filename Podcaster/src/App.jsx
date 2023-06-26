//import './App.css'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { PodcastList } from './components/PodcastList';
import { PodcastDetail } from './components/PodcastDetail';
import { Episode } from "./components/Episode";
import { Header } from "./components/Header";
import { LoadingIndicator } from "./components/LoadingIndicator";
import { useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  return (
    <BrowserRouter>
     <Header/>
     {isLoading && <LoadingIndicator/>}
       <Routes>
        <Route exact path="/" element={<PodcastList setIsLoading={setIsLoading}/>} />
        <Route path="/podcast/:id" element={<PodcastDetail setIsLoading={setIsLoading}/>} />
        <Route path="/podcast/:id/episode/:epid" element={<Episode setIsLoading={setIsLoading}/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
