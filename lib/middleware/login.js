var oauth2orize = require('oauth2orize');


module.exports = function(options) {
  options = options || {};
  
  return function login(req, dec, next) {
    if (req.user) {
      // already logged in, continue
      return next();
    }
    
    dec.prompt('login', { maxAttempts: 3 });
  };
};
