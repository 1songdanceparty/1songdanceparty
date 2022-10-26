import { Client } from 'twitter-api-sdk';
import env from '../env';

const client = new Client(env.TWITTER_BEARER_TOKEN);

export async function tweet() {
  client.tweets.createTweet({
    text: 'hello world',
  });
}
