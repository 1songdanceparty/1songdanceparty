/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { Client, auth } from 'twitter-api-sdk';
import express from 'express';
import env from '../env';

const STATE = generateCSRFToken();
const app = express();
const authClient = new auth.OAuth2User({
  client_id: env.TWITTER_CLIENT_ID,
  client_secret: env.TWITTER_CLIENT_SECRET,
  callback: 'http://localhost:3000/callback',
  scopes: ['tweet.read', 'tweet.write', 'users.read', 'offline.access'],
});

export const client = new Client(authClient);

// eslint-disable-next-line consistent-return
app.get('/callback', async (req, res) => {
  try {
    const { code, state } = req.query;
    if (state !== STATE) return res.status(500).send("State isn't matching");
    const { token } = await authClient.requestAccessToken(code as string);
    console.log(token);
  } catch (error) {
    console.log(error);
  }
});

app.get('/login', async (req, res) => {
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge_method: 's256',
  });
  console.log(authUrl);
  res.redirect(authUrl);
});

app.listen(3000, () => {
  console.log('Go here to login: http://localhost:3000/login');
});

function generateCSRFToken() {
  return 'not-really-necessary-for-our-use-case';
}
