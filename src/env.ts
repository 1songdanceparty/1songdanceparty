const env = {
  SPREADSHEET_ID: '17TIodbKabfAnDeyvjkUNfUq6mGdgNz-lHSzyebIWlas',
  YOUTUBE_PLAYLIST_ID: 'PLSdVLeteesArC_N-BkoH50a8qbWkVW5Mb',
  // GH_TOKEN: process.env.GH_TOKEN,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_REFRESH_TOKEN: process.env.TWITTER_REFRESH_TOKEN,
};

Object.entries(env).forEach(([key, value]) => {
  if (typeof value !== 'string') {
    throw new Error(`Missing value for env var '${key}'`);
  }
});

export default env as Record<string, string>;
