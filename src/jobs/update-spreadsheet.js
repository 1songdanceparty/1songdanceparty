const {google} = require('googleapis');
const sheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

export default async function () {
  const authClient = await authorize();
  const request = {
    spreadsheetId: 'aaaaaa', 
    ranges: ['A2:D'],
    includeGridData: false,
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.get(request)).data;
    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.error(err);
  }
}

async function authorize() {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]
  );
  let authClient = null;

  if (authClient == null) {
    throw Error('authentication failed');
  }

  return authClient;
}
