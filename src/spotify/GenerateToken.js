import React, { useState, useEffect } from "react";
import {generateAccessToken} from "./spotify_auth";

export default function GenerateToken() {
    const [accessToken, setAccessToken] = useState(null);
    const [accessTokenTimestamp, setTimesTokenTimestamp] = useState(null);

    useEffect(() => {
        checkToken();
    });

    const handleRegenerateToken = () => {
        generateAccessToken()
            .then(response => {
                setAccessToken(response.data.access_token);
                setTimesTokenTimestamp(Date.now()+response.data.expires_in*1000);
            })
            .catch(error => {
                console.error("Error generating access token:", error);
            });
    };

    const checkToken = () => {
        if (accessTokenTimestamp < Date.now()) {
            console.log("Generating new access token")
            handleRegenerateToken();
        } else {
            console.log("Token is still valid");
        }
    }

    return (
        <div>
            {accessToken && <p>Access token: {accessToken}</p>}
            {accessTokenTimestamp && <p>Current token expires at: {new Date(accessTokenTimestamp).toLocaleString()}</p>}
            <button onClick={checkToken}>Check token</button>
            <button onClick={handleRegenerateToken}>{accessToken != null ? 'Regenerate' : 'Generate'} new access token</button>
        </div>
    );
}