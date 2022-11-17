import { SongType } from '../types/song';
import * as twitter from '../service/twitter';

export function formatMessage(song: SongType) {
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

  return message;
}

export default async function postOnTwitter(song: SongType) {
  await twitter.tweet(formatMessage(song));
}
