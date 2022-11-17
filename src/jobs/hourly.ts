import * as twitter from '../service/twitter';
import logger from '../utils/logger';

(async function hourly() {
  logger.log('Starting hourly job...');

  try {
    await twitter.refreshSession();

    logger.log('All done! ~:D');
  } catch (err) {
    logger.log('Oops, something went wrong.');
    console.error(err);
    process.exit(1);
  }
}());
