import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import MessageCard from '../Components/Cards/MessageCard/MessageCard';
import InfoCard from '../Components/Cards/InfoCard/InfoCard';
import { Container, ListItemText, ListItem, Button } from '@material-ui/core';
import Header from '../Components/Header/Header';
import Messages from '../Views/Messages/Messages';

let aboutMe = `
              My name is Aslak Frafjord Skailand and I am an 25 year old man.
              I have studied computer engineering at the university of Ager for three years, now I currently work as a
              front-end developer at Altibox. This is my website, here you can find my contact info and CV. I will also
              try to post other things that I find interesting! :-)
              `

let joke = `
            Did you know the first French fries weren't actually cooked in France? \n\n They were cooked in Greece.
            `


export default class App extends React.Component {

  routeTo = (route: string) => {
    console.log(route);
  }

  routeMessages = () => {
    return(
      <>
        <Link to='/messages'>
            <ListItem button >
              <i className="material-icons">feedback</i>
              <ListItemText primary='Messages'/>
            </ListItem>
        </Link>
      </>
    )
  }
  routeMessagesButton = () => {
    return(
      <>
        <Link to='/messages'>
          <Button variant='contained'>
            Messages
          </Button>
        </Link>
      </>
    )
  }

  render(){
  return ( 
    <Router>
      <div className='App'>
        <Header routeMessages={this.routeMessages} routeMessagesButton={this.routeMessagesButton}/>
          
          <Switch>)
            <Route exact path='/'>
              <Container maxWidth='sm'>
                <div className='please-hire-me'>
                  <InfoCard title='React is cool' info={aboutMe}/>
                  <MessageCard />
                  <InfoCard title='Joke' info={joke} />
                </div>
              </Container>
            </Route>
            <Route path='/messages'>
              <Messages />
            </Route>
          </Switch>

      </div>
    </Router>
  );
  }
}

