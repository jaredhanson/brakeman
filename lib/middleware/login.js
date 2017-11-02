var oauth2orize = require('oauth2orize');


module.exports = function(options) {
  options = options || {};
  
  return function login(req, res, next) {
    console.log('%%% KLAMM LOGIN');
    console.log(req);
    
    if (req.user) {
      // already logged in, continue
      return next();
    }
    
    if (req.authN && req.authN.failureCount >= 3) {
      return next(new oauth2orize.AuthorizationError('Too many failed login attempts', 'access_denied'));
    }
    req.prompt('login', { maxAttempts: 3 });
  };
};
