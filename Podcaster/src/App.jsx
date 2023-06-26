//import './App.css'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { PodcastList } from './components/PodcastList';
import { PodcastDetail } from './components/PodcastDetail';
import { Episode } from "./components/Episode";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<PodcastList/>} />
        <Route path="/podcast/:id" element={<PodcastDetail/>} />
        <Route path="/podcast/:id/episode/:epid" element={<Episode/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
