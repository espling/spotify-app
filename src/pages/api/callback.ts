import Axios from "axios";
import querystring from "querystring";
import { NextApiRequest, NextApiResponse } from "next";
// import { createSpotifyApi } from "./../../../utils/spotify";
// import { setAuthCookie, sendRefreshRedirect } from "../../../utils/cookies";

const {
  SPOTIFY_APP_CLIENT_ID,
  SPOTIFY_APP_CLIENT_SECRET,
  SPOTIFY_APP_REDIRECT_URI,
} = process.env;

const callback = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;

  try {
    const { data } = await Axios.post(
      "https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "authorization_code",
        code,
        client_id: SPOTIFY_APP_CLIENT_ID,
        client_secret: SPOTIFY_APP_CLIENT_SECRET,
        redirect_uri: SPOTIFY_APP_REDIRECT_URI,
      })
    );
  } catch (error) {
    res.status(400).send("error");
  }
};

export default callback;
