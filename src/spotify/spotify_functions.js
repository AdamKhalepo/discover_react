import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GenerateToken() {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        generateAccessToken()
            .then(token => {
                setAccessToken(token);
            })
            .catch(error => {
                console.error("Error generating access token:", error);
            });
    }, []);

    const handleRegenerateToken = () => {
        generateAccessToken()
            .then(token => {
                setAccessToken(token);
            })
            .catch(error => {
                console.error("Error generating access token:", error);
            });
    };

    return (
        <div>
            {accessToken && <p>Access token: {accessToken}</p>}
            <button onClick={handleRegenerateToken}>{accessToken != null ? 'Regenerate' : 'Generate'} new access token</button>
        </div>
    );
}

//TODO: Move this function to a separate file and import it in the component (find out why when calling the function from another file returns an error)
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