const fetchSpreadsheet = require('./jobs/update-spreadsheet.js')
const updatePlaylist = require('./jobs/update-playlist.js')
const postOnFacebook = require('./jobs/post-on-facebook.js')

console.log('starting job...')

async function main () {
  console.log('fetching spreadsheet...')

  await fetchSpreadsheet()
  
  console.log('updating playlist...')
  
  await updatePlaylist()
  
  console.log('posting on facebook...')
  
  await postOnFacebook()
  
  console.log('all done!')
}
