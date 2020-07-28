export.handler = async event =>{
     const subject = event.queryStringParameters.name || 'DIDOUU'
     return{
          statusCode:200,
          body: `Hallo ${subject}`
     }
}