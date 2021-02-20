import React from "react";
import { connect } from "react-redux";
import { fetchJoke, fetchNasa, fetchWeatherData } from "../actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import MessageCard from "../Components/Cards/MessageCard/MessageCard";
import InfoCard from "../Components/Cards/InfoCard/InfoCard";
import {
  Container,
  ListItemText,
  ListItem,
  Button,
  ThemeProvider,
  createMuiTheme,
  Grid,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import Header from "../Components/Header/Header";
import Messages from "../Views/Messages/Messages";
import {
  JodResponse,
  NASA_APOD,
  API_KEY,
  NasaResponse,
  WeatherResponse,
} from "../interface";
import Game from "../Components/Game/Game";
import Fantasy from "../Views/Messages/Fantasy";
import Register from "../Views/Register";
import aslakBilde from "../aslak.jpg";
import Footer from "../Components/Footer/Footer";

type Props = {
  payload: string;
  loading: boolean;
  nasaLoading: boolean;
  getJoke: Function;
  getApod: Function;
  getWeatherData: (lat: string, lon: string) => void;
  json: JodResponse;
  nasaJson: NasaResponse;
  weatherData: WeatherResponse;
  weatherLoading: boolean;
};

type State = {
  latitude: string;
  lognitude: string;
  hour: number;
  minutes: number;
  seconds: number;
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d5afe",
    },
    secondary: {
      main: "#637bfe",
    },
  },
});

class App extends React.Component<Props, State> {
  state = {
    latitude: "",
    lognitude: "",
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  };

  componentDidMount() {
    this.props.getJoke();
    this.props.getApod(NASA_APOD, API_KEY);
    this.weatherData();
    setInterval(() => {
      const now = new Date();
      this.setState({
        hour: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);
  }

  weatherData = () => {
    return navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        this.setState(
          {
            latitude: position.coords.latitude.toString(),
            lognitude: position.coords.longitude.toString(),
          },
          () => {
            this.props.getWeatherData(
              this.state.latitude,
              this.state.lognitude
            );
          }
        );
      }
    });
  };

  routeMessages = () => {
    return (
      <>
        <Link to="/messages">
          <ListItem button>
            <i className="material-icons">feedback</i>
            <ListItemText primary="Messages" />
          </ListItem>
        </Link>
      </>
    );
  };

  createRouteButton = (linkTo: string, title: string) => {
    return (
      <>
        <div className="header-button">
          <Link to={linkTo}>
            <Button variant="contained" color="secondary" disableElevation>
              {title}
            </Button>
          </Link>
        </div>
      </>
    );
  };

  routeGame = () => {
    return (
      <>
        <Link to="/messages">
          <Button variant="contained" color="secondary">
            Messages
          </Button>
        </Link>
      </>
    );
  };

  get Spinner() {
    return (
      <Container>
        <br />
        <CircularProgress />
        <br />
      </Container>
    );
  }

  render() {
    let timeString =
      this.state.hour.toString().padStart(2, "0") +
      ":" +
      this.state.minutes.toString().padStart(2, "0") +
      ":" +
      this.state.seconds.toString().padStart(2, "0");
    console.log(
      this.props.weatherLoading ? "loading weather" : this.props.weatherData
    );

    return (
      <Router>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Header
              routeMessages={this.routeMessages}
              createRouteButton={this.createRouteButton}
            />
            <Switch>
              )
              <Route exact path="/">
                <Container maxWidth="lg">
                  <Grid container spacing={3}>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                      {this.props.weatherLoading ? (
                        this.Spinner
                      ) : (
                        <InfoCard
                          title={"Forecast for current hour. " + timeString}
                          info={
                            this.props.weatherData.properties.timeseries[0].data.instant.details.air_temperature.toString() +
                            "°C with " +
                            this.props.weatherData.properties.timeseries[0].data.next_1_hours.details.precipitation_amount.toString() +
                            "mm " +
                            this.props.weatherData.properties.timeseries[0].data
                              .next_1_hours.summary.symbol_code
                          }
                          link="https://api.met.no/weatherapi/"
                        />
                      )}
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                      <InfoCard
                        title="Hi!"
                        info="This is me."
                        imageUrl={aslakBilde}
                      />
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                      <MessageCard />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      {this.props.loading ? (
                        this.Spinner
                      ) : (
                        <InfoCard
                          title={this.props.json.contents.jokes[0].joke.title}
                          info={this.props.json.contents.jokes[0].joke.text}
                          link="https://jokes.one/api/joke/"
                        />
                      )}
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      {this.props.nasaLoading ? (
                        this.Spinner
                      ) : (
                        <InfoCard
                          title={this.props.nasaJson.title}
                          info={this.props.nasaJson.explanation}
                          imageUrl={this.props.nasaJson.url}
                          link="https://api.nasa.gov/"
                        />
                      )}
                    </Grid>
                  </Grid>
                </Container>
              </Route>
              <Route path="/messages">
                <Messages />
              </Route>
              <Route path="/fantasy">
                <Fantasy />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
        <Route path="/game">
          <Game />
        </Route>
        <Divider light className="main-divider" />
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    payload: state.payload,
    loading: state.loading,
    json: state.json,
    nasaLoading: state.nasaLoading,
    nasaJson: state.nasaJson,
    weatherData: state.weatherData,
    weatherLoading: state.weatherLoading,
  };
};

const mapDispatchToProps = {
  getJoke: fetchJoke,
  getApod: fetchNasa,
  getWeatherData: (lat: string, lon: string) => fetchWeatherData(lat, lon),
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
