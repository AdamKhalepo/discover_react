const axios = require('axios');

const generateAccessToken = async () => {
    const data = {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
        client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            data,
            config
        );
        return response.data.access_token;
    } catch (error) {
        console.error('Error while generating access token', error);
    }
}

module.exports = generateAccessToken;
