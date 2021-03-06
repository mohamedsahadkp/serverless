//

var ApiBuilder = require('claudia-api-builder')
api = new ApiBuilder();

api.get('/', function(){
    'use strict'
    return 'Hello World'
});

api.get('/people/{name}', function (request) {  
  'use strict';
  return request.pathParams.name + ' is cool!';
});

api.get('/json', function (request) {  
  'use strict';
  return {
    name: 'John',
    surname: 'Doe',
    email: 'johndoe@example.com'
  };
});

api.post('/echo', function (request) {  
  'use strict';
  return request.body;
});

module.exports = api;

