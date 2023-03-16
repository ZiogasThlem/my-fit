const apiKey = process.env.API_KEY

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}