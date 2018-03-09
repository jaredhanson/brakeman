var oauth2orize = require('oauth2orize');


module.exports = function(options) {
  options = options || {};
  
  return function login(req, txn, next) {
    //console.log('%%% KLAMM LOGIN');
    //console.log(req);
    
    if (txn.user) {
      // already logged in, continue
      return next();
    }
    
    if (txn.authN && txn.authN.failureCount >= 3) {
      return next(new oauth2orize.AuthorizationError('Too many failed login attempts', 'access_denied'));
    }
    txn.prompt('login', { maxAttempts: 3 });
  };
};
