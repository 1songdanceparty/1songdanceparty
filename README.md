# onesong

## v1

1. A GitHub Action starts on a cron 
2. The Action's VM runs a Node.js script
  1. Gets a track from the Google Spreadsheet
  2. Updates the Youtube playlist
  3. Posts the track on Facebook

Steps for prod:

1. create a google API project
1. enable the Google Sheets API and check the quota for your project at