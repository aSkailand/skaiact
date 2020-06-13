import { RegisterUserType, SKAIEND } from './interface';

/*
 * Action Types
 */
export const REQUEST_JOKE = 'REQUEST_JOKE';
export const RECEIVED_JOKE = 'RECEIVED_JOKE';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVED_POST = 'RECEIVED_POST';
export const REGISTER_USER_IN_PROGRESS = 'REGISTER_USER_IN_PROGRESS';
export const USER_REGISTERED = 'USER_REGISTERED';
 
/*
 * Action Creator
 */

export const registerUserInProgress = () => ({
    type: REGISTER_USER_IN_PROGRESS,
});

export const userRegistered = () => ({
    type: USER_REGISTERED,
})
 
export const requestJoke = () => ({
    type: REQUEST_JOKE,
});

export const receivedJoke = (json: any) => ({
    type: RECEIVED_JOKE,
    json: json
});

export const requestPost = () => ({
    type: REQUEST_POST
});

export const receivedPost = (nasaJson: any) => ({
    type: RECEIVED_POST,
    nasaJson: nasaJson
})

export function registerUser(email: string, pw: string){
    return async function(dispatch: any){
        dispatch(registerUserInProgress());
        return await fetch(SKAIEND + '/register', {
            mode: 'cors',   
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pw
            })
        }).then(() => {
            dispatch(userRegistered());
        });
    }
}

export function fetchJoke(){
    return async function(dispatch: any){
        dispatch(requestJoke());
        return fetch('https://api.jokes.one/jod', {method: 'GET'})
        .then(
            response => response.json(),
            error => console.log('An error occured.', error),
        ).then((json) => {
            dispatch(receivedJoke(json));
        },
        );
    };
}

export function fetchNasa(url: string, apikey: string){
    return async function(dispatch:any){
        dispatch(requestPost());
        return fetch(url + '?api_key=' + apikey, {method: 'GET'})
        .then(
            nasaResponse => nasaResponse.json(),
            error => console.log('An error occured.', error),
        ).then((nasaJson) => {
            console.log(nasaJson);
            dispatch(receivedPost(nasaJson));
        },
        );
    };
}


