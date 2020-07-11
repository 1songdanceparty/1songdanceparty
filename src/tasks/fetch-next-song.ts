import { google } from 'googleapis';
import Song from '../Song';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const sheets = google.sheets('v4');
const { OAuth2 } = google.auth

export default async function fetchNextSong(): Promise<Song> {
  await new Promise(resolve => setTimeout(resolve, 750))
  const credentials = {}
  const authClient = await authorize(credentials);
  const request = {
    spreadsheetId: 'aaaaaa', 
    ranges: ['A2:D'],
    includeGridData: false,
    auth: authClient,
  };

  try {
    // const spreadsheet = (await sheets.spreadsheets.get(request)).data;

    return {
      title: {},
      url: ''
    }
  } catch (err) {
    console.error(err);
  }
}

async function authorize(credentials) {
  return {};
}
