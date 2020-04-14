import { REQUEST_JOKE, RECEIVED_JOKE}from "./actions";

const initialState = {loading: true};

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
                }
        default:
            return state;
    }
}