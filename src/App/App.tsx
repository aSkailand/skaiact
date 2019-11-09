import React from 'react';
import './App.scss';
import MessageCard from '../Components/Cards/MessageCard/MessageCard';
import InfoCard from '../Components/Cards/InfoCard/InfoCard';



function App() {
  return ( 
    <div className="App">
      <InfoCard/>
      <MessageCard/>
    </div>
  );
}
export default App;
