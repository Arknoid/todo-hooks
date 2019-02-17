import task from "../data/tasks";
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Max-Age': '*',
  'Content-Type': 'application/json;charset=utf8'
};

exports.handler = function(event, context, callback) {
  return callback(null, {
    headers: headers,
    statusCode: 200,
    body: JSON.stringify(task)
  });
};
