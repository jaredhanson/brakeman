var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Response() {
  EventEmitter.call(this);
  
  this.user = user;
  this.allowed = undefined;
  this._respond = respond;
}

util.inherits(Response, EventEmitter);


Response.prototype.allow = function() {
  this.end(true);
}

Response.prototype.deny = function() {
  this.end(false);
}

Response.prototype.prompt = function(prompt, options) {
  options = options || {};
  options.prompt = prompt;
  
  this.prompt = options;
  this.emit('prompt', name, options);
  this.end();
}

Response.prototype.end = function(allow) {
  this.allowed = allow;
  this.emit('end');
}


module.exports = Response;
