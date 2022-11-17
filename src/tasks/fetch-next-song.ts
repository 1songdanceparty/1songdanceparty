/* eslint-disable camelcase */
import { requiredKeys, SongType } from '../types/song';
import * as google from '../service/google';
import logger from '../utils/logger';
import env from '../env';

// eslint-disable-next-line no-shadow
const DATE_COL_IDX = 0;
const URL_COL_IDX = 1;
// const TITLE_COL_IDX = 2;
// const ARTIST_COL_IDX = 3;
const ARTIST_SOCIAL_COL_IDX = 4;
// const LENGTH_COL_IDX = 5;
// const POST_IDX = 6;
const REQUESTED_BY_COL_IDX = 7;

export default async function fetchNextSong(): Promise<SongType> {
  const todaysDate = getTodaysDate();

  logger.log(`Fetching row for: ${todaysDate}`);

  const values = await google.fetchValueRange(env.SPREADSHEET_ID);

  const todaysRow = values.find((row) => {
    const cell = row[DATE_COL_IDX];
    return cell === todaysDate;
  });

  if (!todaysRow) throw new Error(`Could not find a row for date '${todaysDate}'`);

  const song: SongType = {
    url: todaysRow[URL_COL_IDX],
    artistSocial: todaysRow[ARTIST_SOCIAL_COL_IDX],
    requestedBy: todaysRow[REQUESTED_BY_COL_IDX],
  };

  const isMissingRequiredFields = Object.entries(song)
    .filter(([key]) => (requiredKeys as unknown as string[]).includes(key))
    .some(([key, value]) => key && !value);

  if (isMissingRequiredFields) {
    throw new Error(`
      One of the required fields is missing from today's row.\n
      ${JSON.stringify(song, null, 2)}
    `);
  }

  logger.log(`Got today's song: \n${JSON.stringify(song, null, 2)}`);

  return song;
}

function getTodaysDate() {
  const now = new Date();

  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear().toString().slice(2);

  return `${month}/${day}/${year}`;
}
