# 1songdanceparty

## v1

1. A GitHub Action starts on a cron 
2. The Action's VM runs a Node.js script
  1. Gets a track from the Google Spreadsheet
  2. Updates the Youtube playlist
  3. Posts the track on Facebook

Steps for prod:

1. create a google API project
1. enable the Google Sheets API and check the quota for your project at

## How to refresh Twitter API access

1. Pull the secrets and store them in the env. You need a `client_id` and a `client_secret`.
1. Login to Twitter **as the 1songdanceparty user**
1. Start the Twitter authentication server (`npm run server`)
1. Follow the link printed to stdout
1. Authorize the app (**As the 1songdanceparty user**)
1. Copy the `access_token` and the `refresh_token` that get printed to stdout

## See also

- [https://developers.google.com/youtube/v3/docs/](https://developers.google.com/youtube/v3/docs/)
- [https://console.developers.google.com/](https://console.developers.google.com/)
- [Twitter Authentication](https://developer.twitter.com/en/docs/authentication/oauth-2-0/authorization-code)
- [Refresh token expiring (with offline.access scope)](https://twittercommunity.com/t/refresh-token-expiring-with-offline-access-scope/168899/28)
- [Update repo secrets](https://docs.github.com/en/rest/actions/secrets#create-or-update-a-repository-secret)
