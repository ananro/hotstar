import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { action,comedy ,originals} from './urls';
import './App.css';
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost';


function App() {
  return (
    <div>

       <NavBar/>
       <Banner/>
       <RowPost url={action} title="Action Movies"/>
       <RowPost url={comedy} title="Comedy Movies"/>
      <RowPost url={originals} title="Originals"/>
    </div>
  );
}

export default App;
