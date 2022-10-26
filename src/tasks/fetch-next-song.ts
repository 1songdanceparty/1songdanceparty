import logger from '../utils/logger';
import Song from '../Song';
import * as google from '../service/google';

export default async function fetchNextSong(): Promise<Song> {
  try {
    const request = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      includeGridData: true,
    };

    const spreadsheet = await google.fetchSheet();

    const todaysRow = spreadsheet.data[0].rowData
      .find((row) => row.values[4].effectiveValue.stringValue === '9/18/20');

    // const url = todaysRow.values[0].effectiveValue.stringValue

    logger.log(spreadsheet.data[0].rowData[1].values[4].effectiveValue.stringValue);

    return {
      title: {},
      url: '',
    };
  } catch (err) {
    console.error(err);
  }
}
