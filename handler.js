'use strict';
var config = require('./config.ignored.js')
var twilio = require('twilio')

module.exports.sendMessage = (event, context, callback) => {
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', config });
};

function sendMessage(message, toNumber) {
  var twilioClient = twilio(config.twilioAccountSID, config.twilioAuthToken)
}