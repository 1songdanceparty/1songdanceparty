import fetchNextSong from './tasks/fetch-next-song';
import postOnTwitter from './tasks/post-on-twitter';
import updatePlaylist from './tasks/update-playlist';
import logger from './utils/logger';

export default async function daily() {
  logger.log('starting job...');
  const song = await fetchNextSong();

  await updatePlaylist(song);
  await postOnTwitter(song);

  logger.log('all done! ~:D');
}
