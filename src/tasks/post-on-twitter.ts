import { SongType } from '../types/song';
import * as twitter from '../service/twitter';

export function formatMessage(song: SongType) {
  const thankYou = song.artistSocial
    ? `Thank you for the tune, @${song.artistSocial}!`
    : '';

  const message = song.note
    ? `, who says: “${song.note}”`
    : '!';

  const contents = [
    `Here's our song of the day, it was requested by @${song.requestedBy}${message}`,
    thankYou,
    '#1songdanceparty #1sdp',
    song.url,
  ].filter((x) => x).join('\n\n');

  return contents;
}

export default async function postOnTwitter(song: SongType) {
  await twitter.tweet(formatMessage(song));
}
