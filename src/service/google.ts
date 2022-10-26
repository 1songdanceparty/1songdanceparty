/* eslint-disable camelcase */
import { google, sheets_v4 } from 'googleapis';
import env from '../env';

// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const sheets = google.sheets({
  version: 'v4',
  auth: env.GOOGLE_API_KEY,
});

export async function fetchSheet(): Promise<sheets_v4.Schema$Sheet | undefined> {
  const request = {
    spreadsheetId: process.env.SPREADSHEET_ID,
    includeGridData: true,
  };

  const { data } = await sheets.spreadsheets.get(request);

  const spreadsheet = (data.sheets || [])[0];

  return spreadsheet;
}
