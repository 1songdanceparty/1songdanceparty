# onesong

## v1

1. A GitHub Action starts on a cron 
2. The Action's VM calls a Netlify build hook
3. The build hook triggers a Netlify function (Lambda) call

The Lambda:

1. Gets a track from the Google Spreadsheet
2. Updates the Youtube playlist
3. Posts the track on Facebook
