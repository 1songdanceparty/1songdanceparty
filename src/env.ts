import path from 'path';

export default {
  SPREADSHEET_ID: '17TIodbKabfAnDeyvjkUNfUq6mGdgNz-lHSzyebIWlas',
  YOUTUBE_PLAYLIST_ID: 'PLSdVLeteesArC_N-BkoH50a8qbWkVW5Mb',
  KEY_FILE_PATH: path.join(__dirname, 'key-file.json'),
  GH_TOKEN: process.env.GH_TOKEN,
  GOOGLE_API_CREDS: process.env.GOOGLE_API_CREDS,
  TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_REFRESH_TOKEN: process.env.TWITTER_REFRESH_TOKEN,
} as Record<string, string>;
