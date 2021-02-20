export const SKAIEND = "https://161.35.172.89:8080";

export const API_KEY = "SoRkxWOY1USb2nQbIxUL2FUSpSDgmvmumBXiktY7";

export const NASA_APOD = "https://api.nasa.gov/planetary/apod";

export interface RegisterUserType {
  email: string;
  password: string;
}

export interface MessageResponse {
  _id: string;
  message: string;
  date: string;
}

export interface PlayerResponse {
  _id: string;
  name: string;
  number: number;
  position: string;
  team: string;
}

export interface JodResponse {
  success: {
    total: number;
  };
  contents: {
    jokes: [
      {
        description: string;
        date: string;
        joke: {
          title: string;
          text: string;
        };
      }
    ];
    copyright: string;
  };
}

export interface NasaResponse {
  date: string;
  explanation: string;
  title: string;
  url: string;
}

export interface LoginErrorResponse {
  error: string;
}

export interface WeatherResponse {
  properties: {
    timeseries: TimeSeries[];
  };
}

interface TimeSeries {
  data: {
    instant: {
      details: {
        air_temperature: number;
      };
    };
    next_1_hours: {
      details: {
        precipitation_amount: number;
      };
      summary: {
        symbol_code: string;
      };
    };
  };
  time: string;
}
