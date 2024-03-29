import { auth, Client } from 'twitter-api-sdk';
import env from '../env';
import logger from '../utils/logger';
import { updateSecret } from './github';

const client = new Client(env.TWITTER_ACCESS_TOKEN);

export async function refreshSession() {
  const authClient = new auth.OAuth2User({
    client_id: env.TWITTER_CLIENT_ID,
    client_secret: env.TWITTER_CLIENT_SECRET,
    callback: 'http://localhost:3000/callback',
    scopes: ['tweet.read', 'tweet.write', 'users.read', 'offline.access'],
  });

  authClient.token = {
    token_type: 'bearer',
    scope: 'tweet.write users.read tweet.read offline.access',
    access_token: env.TWITTER_ACCESS_TOKEN,
    refresh_token: env.TWITTER_REFRESH_TOKEN,
  };

  logger.log('Refreshing Twitter access token...');

  const { token } = await authClient.refreshAccessToken();

  if (!token.refresh_token || !token.access_token) {
    throw new Error('Missing access and/or refresh token in the response from Twitter.');
  }

  console.log(token);

  logger.log('Got an access and a refresh token! Saving them...');

  await updateSecret('TWITTER_REFRESH_TOKEN', token.refresh_token);

  await updateSecret('TWITTER_ACCESS_TOKEN', token.access_token);
}

export async function tweet(str: string) {
  await client.tweets.createTweet({
    text: str,
  });
}
