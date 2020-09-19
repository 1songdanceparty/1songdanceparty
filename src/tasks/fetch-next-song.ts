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

    const todaysRow = spreadsheet.data[0].rowData.find(row => {
      return row.values[4].effectiveValue.stringValue === '9/18/20'
    })

    // const url = todaysRow.values[0].effectiveValue.stringValue

    logger.log(spreadsheet.data[0].rowData[1].values[4].effectiveValue.stringValue)

    return {
      title: {},
      url: ''
    }
  } catch (err) {
    console.error(err);
  }
}
