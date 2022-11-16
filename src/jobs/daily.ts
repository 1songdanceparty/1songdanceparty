import fetchNextSong from '../tasks/fetch-next-song';
import postOnTwitter from '../tasks/post-on-twitter';
import logger from '../utils/logger';

export default async function daily() {
  logger.log('Starting job...');

  try {
    const song = await fetchNextSong();

    await postOnTwitter(song);

    logger.log('All done! ~:D');
  } catch (err) {
    logger.log('Oops! Ran into an error:');
    logger.log((err as Error).message);
    logger.log((err as Error).stack || '');
  }
}
