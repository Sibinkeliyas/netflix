import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/navbar';
import RowPost from './Components/row-post/row-post';
import {action, originals} from './urls'



function App() {
  
  return (
    <div className="app">
     <Navbar />
     <Banner />
     <RowPost  url={originals} title='Netflix originals'/>
     <RowPost  url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;