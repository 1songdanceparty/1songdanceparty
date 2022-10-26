import logger from './utils/logger';
import * as twitter from './service/twitter';

main();

async function main() {
  try {
    await twitter.tweet('hello world!');
  } catch (err) {
    console.error(err);
  }
}
