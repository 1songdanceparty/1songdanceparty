import fetchNextSong from '../tasks/fetch-next-song';
import postOnTwitter from '../tasks/post-on-twitter';
import logger from '../utils/logger';

(async function daily() {
  logger.log('Starting job...');

  try {
    const song = await fetchNextSong();

    await postOnTwitter(song);

    logger.log('All done! ~:D');
  } catch (err) {
    logger.log('Oops, something went wrong.');
    console.error(err);
    process.exit(1);
  }
}());
