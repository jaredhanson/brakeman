/**
 * Module dependencies.
 */
var proto = require('./application')
  , utils = require('./utils');


/**
* Create application.
*
* @return {Function}
* @api public
*/
function create() {
  function app(req, txn) { app.handle(req, txn); }
  utils.merge(app, proto);
  app.init();
  for (var i = 0; i < arguments.length; ++i) {
    app.use(arguments[i]);
  }
  return app;
}

/**
 * Expose create() as the module.
 */
exports = module.exports = create;
exports.create = create;

exports.login = require('./middleware/login');
exports.stepup = require('./middleware/stepup');

exports.Request = require('./request');
exports.Response = require('./response');
