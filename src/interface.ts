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



