export const API_KEY = 'SoRkxWOY1USb2nQbIxUL2FUSpSDgmvmumBXiktY7';

export const NASA_APOD = 'https://api.nasa.gov/planetary/apod';

export interface MessageResponse {
    _id: string,
    message: string,
    date: string
}

export interface JodResponse {
    success: {
        total: number
    },
    contents: {
        jokes: [
            {
                description: string,
                date: string,
                joke: {
                    title: string
                    text: string
                }
            }
        ]
        copyright: string
    }
}

export interface NasaResponse {
    date: string,
    explanation: string,
    title: string,
    url: string,
}



