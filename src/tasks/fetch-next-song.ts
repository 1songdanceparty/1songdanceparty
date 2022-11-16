/* eslint-disable camelcase */
import { sheets_v4 } from 'googleapis';
import { ISong } from '../interfaces/ISong';
import * as google from '../service/google';
import logger from '../utils/logger';
import env from '../env';

// eslint-disable-next-line no-shadow
const DATE_COL_IDX = 0;
const URL_COL_IDX = 1;
// const TITLE_COL_IDX = 2;
const ARTIST_COL_IDX = 3;
// const ARTIST_SOCIAL_COL_IDX = 4;
// const LENGTH_COL_IDX = 5;
const REQUESTED_BY_COL_IDX = 6;

export default async function fetchNextSong(): Promise<ISong> {
  const todaysDate = getTodaysDate();

  logger.log(`Fetching row for: ${todaysDate}`);

  const rowData = await google.fetchRowData(env.SPREADSHEET_ID);

  const todaysRow = rowData.find(({ values }) => {
    if (!values) return false;
    const cell = values[DATE_COL_IDX];
    if (!cell) return false;
    return cell.effectiveValue?.stringValue === todaysDate;
  });

  if (!todaysRow || !todaysRow.values) {
    throw new Error(`Could not find a row for date '${todaysDate}'`);
  }

  return {
    url: parseCellValue(todaysRow.values, URL_COL_IDX),
    requestedBy: parseCellValue(todaysRow.values, REQUESTED_BY_COL_IDX),
    artistSocial: parseCellValue(todaysRow.values, ARTIST_COL_IDX),
  };
}

function getTodaysDate() {
  const now = new Date();

  const month = now.getMonth();
  const day = now.getDate();
  const year = now.getFullYear().toString().slice(2);

  return `${month}/${day}/${year}`;
}

function parseCellValue(cellData: sheets_v4.Schema$CellData[], index: number) {
  const cell = cellData[index];

  if (!cell.effectiveValue || !cell.effectiveValue.stringValue) {
    throw new Error(`Cell '${index}' is missing a value`);
  }

  return cell.effectiveValue.stringValue;
}
