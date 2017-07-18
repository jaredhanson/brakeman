var oauth2orize = require('oauth2orize');


module.exports = function(options) {
  options = options || {};
  
  return function stepup(txn, next) {
    // TODO: Prompt based on conditions of resource...
    
    // TODO: Determine options (acceptable methods, LoA, VoT, etc)
    //txn.prompt('stepup', { methods: [ 'otp' ] });
    txn.prompt('stepup');
  };
};
