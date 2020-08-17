import { google } from 'googleapis';
import logger from '../logger';

const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.GOOGLE_API_KEY
});

export default async function (song) {
  // empty the playlist
  try { 
    // list playlist items
      const items = await youtube.playlistItems.list({
        playlistId: process.env.PLAYLIST_ID
      })
      logger.log(JSON.stringify(items))
      // delete all playlist items
      // insert playlist item <- song

    } catch (err) {
      console.log(err)
    }


  return true
}
