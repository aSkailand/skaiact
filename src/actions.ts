

/*
 * Action Types
 */

export const REQUEST_JOKE = 'REQUEST_JOKE';
export const RECEIVED_JOKE = 'RECEIVED_JOKE';

 
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

export function fetchJoke(){
    return function(dispatch: any){
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


