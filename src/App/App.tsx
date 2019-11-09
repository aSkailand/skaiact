import React from 'react';
import './App.scss';
import MessageCard from '../Components/Cards/MessageCard/MessageCard';
import InfoCard from '../Components/Cards/InfoCard/InfoCard';
import { Container } from '@material-ui/core';

let aboutMe = `
              My name is Aslak Frafjord Skailand and I am an 25 year old man.
              I have studied computer engineering at the university of Ager for three years, now i currently work as a
              front-end developer at Altibox. This is my website, here you can find my contact info and CV. I will also
              try to post other things that I find interesting! :-)
              `

let joke = `
            Did you know the first French fries weren't actually cooked in France? \n\n They were cooked in Greece.
            `

function App() {
  return ( 
    <div className="App">

      <Container maxWidth="sm">
        <div className="please-hire-me">
          <InfoCard title="About me" info={aboutMe}/>
          <InfoCard title="he-he" info={joke} />
          <MessageCard/>
        </div>
      </Container>
    </div>
  );
}
export default App;
