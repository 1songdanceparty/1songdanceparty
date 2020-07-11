import logger from './logger'
import fetchNextSong from './tasks/fetch-next-song'
import updatePlaylist from './tasks/update-playlist'
import postOnFacebook from './tasks/post-on-facebook'

logger.log('starting job...')

main()

async function main () {
  logger.log('fetching next song...')
  const song = await fetchNextSong()

  logger.log('got song:')
  logger.log(JSON.stringify(song))

  logger.log('updating playlist...')
  await updatePlaylist(song)
  logger.log('updating facebook...')
  await postOnFacebook(song)

  logger.log('all done! ~:D')
}
