const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

const auth = new GoogleAuth({

  keyFile: './keys/snappy-weft-server-to-server-interacttion.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

async function main() {


  try {

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '16OaiE4MGIVVXjB7RshgDoT4mvga1eeaCcMfnCueofMw',
      range: 'FB_TODAY',
    });

    if(response.data.values.length > 0){
       response.data.values.forEach( ( row, index) => {
          console.log(row[0])
       })
    }

  } catch (error) {
    console.error('Authentication or API request error:', error);
  }


}

main();
