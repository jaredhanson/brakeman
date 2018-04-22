var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Request(options, send) {
  EventEmitter.call(this);
  this.user = options.user;
  this.client = options.client;
  this.audience = options.audience;
  this.scope = options.scope;
  this._send = send;
}

util.inherits(Request, EventEmitter);

Request.prototype.send = function() {
  this._send();
}


module.exports = Request;
