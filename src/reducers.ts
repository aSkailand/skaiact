import { REQUEST_JOKE, RECEIVED_JOKE, REQUEST_POST, RECEIVED_POST}from "./actions";

const initialState = {loading: true, nasaLoading: true};

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
            }
        default:
            return state;
    }
}