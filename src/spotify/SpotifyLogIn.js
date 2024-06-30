import {pkceLogIn} from "./spotify_auth";

export default function SpotifyLogIn() {
    return (
        <div>
            <button className="spotify-btn" onClick={pkceLogIn}>Log in with Spotify</button>
        </div>
    );
}
