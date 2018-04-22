var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Response() {
  EventEmitter.call(this);
}

util.inherits(Response, EventEmitter);


Response.prototype.permit = function() {
  this.emit('decision', true);
  this.end();
}

Response.prototype.deny = function() {
  this.emit('decision', false);
  this.end();
}

Response.prototype.indeterminate = function() {
  this.emit('decision', undefined);
  this.end();
}

Response.prototype.na =
Response.prototype.notApplicable = function() {
  this.emit('decision', null);
  this.end();
}

Response.prototype.prompt = function(name, options) {
  this.emit('prompt', name, options);
  this.end();
}

Response.prototype.end = function() {
  this.emit('end');
}


module.exports = Response;
