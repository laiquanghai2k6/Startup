/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	USER_TABLE
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk')
const https = require('https')

const {USER_TABLE} = process.env;

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    //get all users
    const params = {
        TableName:USER_TABLE,
    };
    const users = await docClient.scan(params).promise();
    console.log(`Sending notification to ${users.Items.length} user`)
    //send push notification to everyone

    await Promise.all(
        users.Items.map((user)=>
        user?.expoNotificationToken &&
        sendPushNotification(user.expoNotificationToken))

        
        )

    // personalize the message based on the user progress

    return "Finished"
};
 

async function sendPushNotification(expoPushToken) {

  const message = {
    to: expoPushToken,
    sound: 'default',
    title: ' Dont forget!',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  const options = {
    hostname: 'exp.host',
    path: '/--/api/v2/push/send',
    method: 'POST',
    port: 443, // 👈️ replace with 80 for HTTP requests
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',

      'Content-Type': 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let rawData = '';

      res.on('data', chunk => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });

    req.on('error', err => {
      reject(new Error(err));
    });

    // 👇️ write the body to the Request object
    req.write(JSON.stringify(message));
    req.end();
  });
}


