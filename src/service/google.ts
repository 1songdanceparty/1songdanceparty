/* eslint-disable camelcase */
import { google } from 'googleapis';
import env from '../env';

const sheets = google.sheets({
  version: 'v4',
  auth: env.GOOGLE_API_KEY,
});

export async function fetchRowData(spreadsheetId: string) {
  const request = {
    spreadsheetId,
    includeGridData: true,
  };

  const { data } = await sheets.spreadsheets.get(request);

  if (!data.sheets) {
    throw new Error('There is something wrong with the spreadsheet that was fetched.');
  }

  const spreadsheet = data.sheets[0];

  if (!spreadsheet.data) {
    throw new Error('The first sheet is empty.');
  }

  const sheet = spreadsheet.data[0];

  if (!sheet.rowData) {
    throw new Error('The sheet does not have row data.');
  }

  return sheet.rowData;
}
