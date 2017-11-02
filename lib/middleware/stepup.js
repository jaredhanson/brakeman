var oauth2orize = require('oauth2orize');


module.exports = function(options) {
  options = options || {};
  
  return function stepup(req, res, next) {
    // TODO: Prompt based on conditions of resource...
    
    // TODO: Determine options (acceptable methods, LoA, VoT, etc)
    //req.prompt('login', { methods: [ 'otp' ] });
    req.prompt('login', { methods: ['otp' ]});
  };
};
