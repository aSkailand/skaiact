import {
    REQUEST_JOKE, RECEIVED_JOKE, REQUEST_POST, RECEIVED_POST,
    REGISTER_USER_IN_PROGRESS, USER_REGISTERED, REQUEST_WEATHER,
    RECEIVED_WEATHER
} from "./actions";

const initialState = {
        loading: true,
        nasaLoading: true,
        registered: false,
        weatherLoading: true,
    };

export function app(state = initialState, action: any){
    switch(action.type){
        case REQUEST_JOKE:
            return {
                ...state,
                loading: true
                };
        case RECEIVED_JOKE:
            return {
                ...state,
                json: action.json,
                loading: false
                };
        case REQUEST_POST:
            return {
                ...state,
                nasaLoading: true
            };
        case RECEIVED_POST:
            return{
                ...state,
                nasaJson: action.nasaJson,
                nasaLoading: false,
            };
        case REGISTER_USER_IN_PROGRESS:
            return{
                ...state,
                registered: false
            };
        case USER_REGISTERED:
            return{
                ...state,
                registered: action.registered
            };
        case REQUEST_WEATHER:
            return {
                ...state,
                weatherLoading: true
            };
        case RECEIVED_WEATHER:
            return {
                ...state,
                weatherData: action.weatherJson,
                weatherLoading: false
            };
        default:
            return state;
    }
}