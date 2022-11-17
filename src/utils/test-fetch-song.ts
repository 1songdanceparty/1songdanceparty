import fetchNextSong from '../tasks/fetch-next-song';
import { formatMessage } from '../tasks/post-on-twitter';

(async function main() {
  const song = await fetchNextSong();

  console.log(formatMessage(song));
}());
