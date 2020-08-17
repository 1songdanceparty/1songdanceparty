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
      spreadsheetId: process.env.SPREADSHEET_ID || '', 
      ranges: ['A2:D'],
      includeGridData: false
    };
    const spreadsheet = await sheets.spreadsheets.get(request)
      .then(res => res.data);

    logger.log(JSON.stringify(spreadsheet))

    return {
      title: {},
      url: ''
    }
  } catch (err) {
    console.error(err);
  }
}
