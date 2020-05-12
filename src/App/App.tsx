import React from 'react';
import { connect } from 'react-redux';
import { fetchJoke, fetchNasa } from '../actions';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import MessageCard from '../Components/Cards/MessageCard/MessageCard';
import InfoCard from '../Components/Cards/InfoCard/InfoCard';
import { Container, ListItemText, ListItem, Button, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Header from '../Components/Header/Header';
import Messages from '../Views/Messages/Messages';
import { JodResponse, NASA_APOD, API_KEY, NasaResponse} from '../interface'
import Game from '../Components/Game/Game';
import Fantasy from '../Views/Messages/Fantasy';

const aslak = 'https://scontent.fosl4-2.fna.fbcdn.net/v/t1.0-9/86754935_10156801609966657_8731657504766820352_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ZgW6BRe4wTwAX9sBp5i&_nc_ht=scontent.fosl4-2.fna&oh=3d1cb0a15ff20152302c7835e6079d78&oe=5EBD2404';

type Props = {
  payload: string,
  loading: boolean,
  nasaLoading: boolean,
  getJoke: Function,
  getApod: Function,
  json: JodResponse,
  nasaJson: NasaResponse
}


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3d5afe',
    },
    secondary: {
      main: '#637bfe',
    },
  },
});

class App extends React.Component<Props, {}>{
  componentDidMount(){
    this.props.getJoke();
    this.props.getApod(NASA_APOD, API_KEY);
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

  createRouteButton = (linkTo: string, title: string) => {
    return(
      <>
      <div className="header-button">
        <Link to={linkTo}>
          <Button variant='contained' color='secondary' disableElevation>
            {title}
          </Button>
        </Link>
      </div>
      </>
    )
  }

  routeGame = () => {
    return(
      <>
        <Link to='/messages'>
          <Button variant='contained' color='secondary'>
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
        <ThemeProvider theme={theme}>
          <Header routeMessages={this.routeMessages} createRouteButton={this.createRouteButton}/>
            <Switch>)
              <Route exact path='/'>
                <Container maxWidth='sm'>
                  <div className='please-hire-me'>
                    <InfoCard title='Hi!' info='This is me.' imageUrl={aslak}/>
                    <MessageCard />
                    {this.props.loading ?
                      null :
                      <InfoCard title={this.props.json.contents.jokes[0].joke.title} info={this.props.json.contents.jokes[0].joke.text}/>}
                    {this.props.nasaLoading ?
                      null :
                      <InfoCard title={this.props.nasaJson.title} info={this.props.nasaJson.explanation} imageUrl={this.props.nasaJson.url}/>}
                  </div>
                </Container>
              </Route>
              <Route path='/messages'>
                <Messages />
              </Route>
              <Route path='/fantasy'>
                <Fantasy />
              </Route>
            </Switch>
          </ThemeProvider>

        </div>
        <Route path='/game'>
          <Game/>
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  return{
    payload: state.payload,
    loading: state.loading,
    json: state.json,
    nasaLoading: state.nasaLoading,
    nasaJson: state.nasaJson
  }
}

const mapDispatchToProps = { getJoke: fetchJoke, getApod: fetchNasa}

export default connect(mapStateToProps, mapDispatchToProps)(App);