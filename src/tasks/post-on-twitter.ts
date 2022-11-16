import { ISong } from '../interfaces/ISong';
import * as twitter from '../service/twitter';

export default async function postOnTwitter(song: ISong) {
  const { url, requestedBy, artistSocial } = song;

  const thankYou = artistSocial
    ? `Thank you for the tune, @${artistSocial}.`
    : '';

  const message = `
    Hello, World! 
    Here's the song of the day, requested by @${requestedBy}!
    ${thankYou}
    #1songdanceparty #1sdp
    ${url}`;

  await twitter.tweet(message);
}
