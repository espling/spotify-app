import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

import { JWT } from "next-auth/jwt";

const {
  SPOTIFY_APP_CLIENT_ID,
  SPOTIFY_APP_REDIRECT_URI,
  SPOTIFY_APP_SESSION_SECRET,
  SPOTIFY_APP_CLIENT_SECRET,
} = process.env;

const SPOTIFY_REFRESH_TOKEN_URL = "https://accounts.spotify.com/api/token";

const scopes = [
  "streaming",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-private",
  "playlist-modify-public",
];

async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const basicAuth = Buffer.from(
      `${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_REDIRECT_URI}`
    ).toString("base64");
    const { data } = await axios.post(
      SPOTIFY_REFRESH_TOKEN_URL,
      {
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      },
      {
        headers: {
          Authorization: `Basic ${basicAuth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return {
      ...token,
      accessToken: data.access_token,
      accessTokenExpires: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: SPOTIFY_APP_CLIENT_ID!,
      clientSecret: SPOTIFY_APP_CLIENT_SECRET!,
      authorization: `https://accounts.spotify.com/authorize?response_type=code&scope=${scopes}`,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      console.log("jwt - nextauth, ", token, account, user);
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at * 1000,
          user,
        };
      }
      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }
      const newToken = await refreshAccessToken(token);
      return newToken;
    },
    async session({ session, token }) {
      console.log("nextauth - session, ", token, session);
      session.accessToken = token.accessToken;
      session.error = token.error;
      session.user = token.user;
      return session;
    },
  },
  secret: SPOTIFY_APP_SESSION_SECRET,
};

// export default NextAuth(authOptions);
