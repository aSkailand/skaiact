
/*
 * Action Types
 */
export const REQUEST_JOKE = 'REQUEST_JOKE';
export const RECEIVED_JOKE = 'RECEIVED_JOKE';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVED_POST = 'RECEIVED_POST';
 
/*
 * Action Creator
 */
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


