import { google } from 'googleapis';
import logger from '../logger';
import Song from '../Song';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const sheets = google.sheets({
  version: 'v4',
  auth: process.env.GOOGLE_API_KEY
});

export default async function fetchNextSong(): Promise<Song> {
  try {
    const request = {
      spreadsheetId: process.env.SPREADSHEET_ID, 
      includeGridData: true
    };

    const spreadsheet = await sheets.spreadsheets.get(request)
      .then(res => res.data.sheets[0]);

    const firstRow = spreadsheet.data[0].rowData[0]

    logger.log(firstRow.values[0].effectiveValue.stringValue)

    return {
      title: {},
      url: ''
    }
  } catch (err) {
    console.error(err);
  }
}
