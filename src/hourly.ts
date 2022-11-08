import { refreshSession } from './service/twitter';
import logger from './utils/logger';

export default async function hourly() {
  logger.log('starting job...');

  await refreshSession();

  logger.log('all done! ~:D');
}
