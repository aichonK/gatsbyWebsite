exports.handler = async event => {
  const subject = event.queryStringParameters.name || "DIDOUU"
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}
