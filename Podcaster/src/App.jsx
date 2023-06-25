import './App.css'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { PodcastList } from './components/PodcastList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PodcastList/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
