const { google } = require('googleapis');
const fs = require("fs");
const keyFile = require('./keys/snappy-weft-server-to-server-interacttion.json');



async function authenticate() {

  try{
    const credentials = keyFile;
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/spreadsheets' ], // Add the required scopes for your use case
    });
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    //write the access token into a file
    fs.writeFile('./keys/token', accessToken.token , function(err){
      if(err)
        console.log("Token write failed")
      else
        console.log("Token written successfully")
    });

  } catch (error) {
    console.error('Authentication error:', error);
  }

}

// Call the authentication function
authenticate();
