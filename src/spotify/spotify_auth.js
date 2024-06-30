import axios from 'axios';

export async function generateAccessToken() {
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', process.env.REACT_APP_SPOTIFY_CLIENT_ID);
    data.append('client_secret', process.env.REACT_APP_SPOTIFY_CLIENT_SECRET);

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    return axios.post(
        'https://accounts.spotify.com/api/token',
        data,
        config
    );
}

export async function pkceLogIn() {
    const codeVerifier = generateRandomString(128);
    const hash = await sha256(codeVerifier);
    const codeChallenge = base64urlencode(hash);
    const scope = 'user-read-private user-read-email';
    const state = generateRandomString(16);
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = 'http://localhost:3000';

    //call spotify account service
    const params = {
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: 'S256',
        code_challenge: codeChallenge,
    };

    const url = 'https://accounts.spotify.com/authorize?' + new URLSearchParams(params).toString();
    window.location.href = url.toString();
}

const generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

const sha256 = async function(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest('SHA-256', data);
};

const base64urlencode = function(a) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

