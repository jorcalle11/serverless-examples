'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*' // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  };

  callback(null, response);
};

module.exports.run = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      event,
      context,
      message: 'Im the run function'
    })
  };
  return callback(null, response);
};
