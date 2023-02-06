import { NextApiRequest, NextApiResponse } from "next";

const scopes = [
  "streaming",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
];

const { SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_REDIRECT_URI } = process.env;

const buildURL = (scopes: string[], callback: string) => {
  return (
    "https://accounts.spotify.com/authorize?response_type=code" +
    `&client_id=${SPOTIFY_APP_CLIENT_ID}` +
    `&scope=${encodeURIComponent(scopes.join(" "))}` +
    `&redirect_uri=${encodeURIComponent(callback)}`
  );
};

const login = async (_req: NextApiRequest, res: NextApiResponse) => {
  return res.redirect(buildURL(scopes, SPOTIFY_APP_REDIRECT_URI!));
};

export default login;
