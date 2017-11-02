/**
 * Module dependencies.
 */
//var Router = require('./router')


/**
 * Application prototype.
 */
var app = exports = module.exports = {};

/**
 * Initialize application.
 *
 * @api private
 */
app.init = function() {
  this._stack = [];
};


/**
 * Utilize the given middleware `fn` for the given `topic`, defaulting to _/_.
 *
 * Examples:
 *
 *     app.use(antenna.json());
 *
 * @param {String|Function} topic
 * @param {Function} fn
 * @return {app} for chaining
 * @api public
 */
app.use = function(fn) {
  // wrap sub-apps
  if ('function' == typeof fn.handle) {
    var server = fn;
    fn = function(req, res, next) {
      server.handle(req, res, next);
    };
  }
  
  // add the middleware
  this._stack.push({ handle: fn });
  return this;
}

/**
 * Handle messages, by running them through the middleware stack.
 *
 * @api private
 */
app.handle = function(req, res, out) {
  var self = this
    , stack = this._stack
    , idx = 0;
  
  function next(err) {
    var layer = stack[idx++];
    
    // all done
    if (!layer) {
      // delegate to parent
      if (out) { return out(err); }
      // TODO: Implement default behavior for unhandled messages.
      if (err) {
        console.error(err.stack);
      }
      return;
    }
    
    try {
      // skip this layer if the topic doesn't match, noting that topic names are
      // case sensitive
      //if (0 != msg.topic.indexOf(layer.topic)) return next(err);
      
      var arity = layer.handle.length;
      if (err) {
        if (arity == 4) {
          layer.handle(err, req, res, next);
        } else {
          next(err);
        }
      } else if (arity < 4) {
        layer.handle(req, res, next);
      } else {
        next();
      }
    } catch (ex) {
      next(ex);
    }
  }
  next();
}
