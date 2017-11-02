/* global describe, it */

var pkg = require('..');
var expect = require('chai').expect;


describe('klamm', function() {
  
  it('should export create', function() {
    expect(pkg).to.be.a('function');
    expect(pkg.create).to.be.a('function');
    expect(pkg).to.equal(pkg.create);
  });
  
});
