import React from 'react';
import { connect } from 'react-redux';
import { fetchJoke, fetchNasa, fetchWeatherData } from '../actions';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import MessageCard from '../Components/Cards/MessageCard/MessageCard';
import InfoCard from '../Components/Cards/InfoCard/InfoCard';
import { Container, ListItemText, ListItem, Button, ThemeProvider, createMuiTheme, Grid } from '@material-ui/core';
import Header from '../Components/Header/Header';
import Messages from '../Views/Messages/Messages';
import { JodResponse, NASA_APOD, API_KEY, NasaResponse, WeatherResponse} from '../interface'
import Game from '../Components/Game/Game';
import Fantasy from '../Views/Messages/Fantasy';
import Register from '../Views/Register';
import aslakBilde from '../aslak.jpg';



type Props = {
  payload: string,
  loading: boolean,
  nasaLoading: boolean,
  getJoke: Function,
  getApod: Function,
  getWeatherData: Function,
  json: JodResponse,
  nasaJson: NasaResponse,
  weatherData: WeatherResponse,
  weatherLoading: boolean
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
    this.props.getWeatherData();
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
    console.log(this.props.weatherLoading ? 'loading..' : this.props.weatherData.properties.timeseries );
    
    return ( 
      <Router>
        <div className='App'>
        <ThemeProvider theme={theme}>
          <Header routeMessages={this.routeMessages} createRouteButton={this.createRouteButton}/>
            <Switch>)
              <Route exact path='/'>
                <Container maxWidth='lg'>         
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <div className='please-hire-me'>
          
                      <InfoCard title='Hi!' info='This is me.' imageUrl={aslakBilde}/>
                      <MessageCard />
                      {this.props.loading ?
                        null :
                        <InfoCard title={this.props.json.contents.jokes[0].joke.title} info={this.props.json.contents.jokes[0].joke.text}/>}
                      {this.props.nasaLoading ?
                        null :
                        <InfoCard title={this.props.nasaJson.title} info={this.props.nasaJson.explanation} imageUrl={this.props.nasaJson.url}/>}
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    {this.props.weatherLoading ? 
                    null : 
                    <InfoCard
                      title={'Temperatures next 6 hours'}
                      info={
                        'From ' + this.props.weatherData.properties.timeseries[12].time +
                        ' Max temperature: ' + this.props.weatherData.properties.timeseries[12].data.next_6_hours.details.air_temperature_max.toString() + '\n' +
                        'Min temperature: ' + this.props.weatherData.properties.timeseries[12].data.next_6_hours.details.air_temperature_min.toString()
                        }/>}

                  </Grid>
                  </Grid>
                </Container>
              </Route>
              <Route path='/messages'>
                <Messages />
              </Route>
              <Route path='/fantasy'>
                <Fantasy />
              </Route>
              <Route path='/register'>
                <Register/>
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
    nasaJson: state.nasaJson,
    weatherData: state.weatherData,
    weatherLoading: state.weatherLoading
  }
}

const mapDispatchToProps = { getJoke: fetchJoke, getApod: fetchNasa, getWeatherData: fetchWeatherData}

export default connect(mapStateToProps, mapDispatchToProps)(App);