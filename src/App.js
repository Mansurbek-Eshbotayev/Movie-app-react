import { Route, Routes } from 'react-router-dom';
import './assets/styles/index.css';
import { Header } from './Header/Header';
import { Home } from './pages/Home';
import { SingleMovie } from './pages/SingleMovie/SingleMovie';
import {  TopReated } from './pages/Top-rated';
import { Upcoming } from './pages/Upcoming';


function App() {
  return (
    <div className="App">
     <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/topraited' element={<TopReated />}/>
        <Route path='/upcoming' element={<Upcoming />}/>
        <Route path='/singlemove/:id' element={<SingleMovie />}/>
      </Routes>
    
    </div>
  );
}

export default App;
