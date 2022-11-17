/* eslint-disable camelcase */
import { writeFile } from 'fs/promises';
import { google } from 'googleapis';
import env from '../env';

const { KEY_FILE_PATH, GOOGLE_API_CREDS } = env;
let credsSaved = false;

export async function fetchValueRange(spreadsheetId: string) {
  const sheets = await authenticate();
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: '\'Song DB\'!A1:J',
  });

  if (!data.values || !data.values.length) {
    throw new Error('The sheet does not have row data.');
  }

  return data.values;
}

export async function authenticate() {
  await saveCreds();

  const auth = await google.auth.getClient({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({
    auth,
    version: 'v4',
  });
}

export async function saveCreds() {
  if (credsSaved) return credsSaved;

  await writeFile(KEY_FILE_PATH, GOOGLE_API_CREDS);
  credsSaved = true;
  return credsSaved;
}
