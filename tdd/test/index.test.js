const assert = require('assert');
const sinon = require('sinon');

const index = require('../index');

describe('Sum', function () {
  it('should return 10 if array has 5 2s', () => {
    assert.equal(index.sum([2, 2, 2, 2, 2]), 10);
  });
  it('should return 0 on empty array', () => {
    assert.equal(index.sum([]), 0);
  });
  it('should return negative if the array totals negative', () => {
    assert.equal(index.sum([-2, -1, -3]), -6);
  });
});

describe('isMultipleOfEight', function () {
  it('should return true with 0', () => {
    assert.equal(index.isMultipleOfEight(16), true);
  });
  it('should return true with 8', () => {
    assert.equal(index.isMultipleOfEight(8), true);
  });
  it('should return true with 64', () => {
    assert.equal(index.isMultipleOfEight(64), true);
  });
  it('should return false with -2', () => {
    assert.equal(index.isMultipleOfEight(-2), false);
  });
  it('should return false with 7', () => {
    assert.equal(index.isMultipleOfEight(7), false);
  });
  it('should return true with no value', () => {
    assert.equal(index.isMultipleOfEight(), true);
  });
});

describe('isUserValid', function () {
  it('should return false with no user', () => {
    assert.equal(index.isUserValid(), false);
  });
  it('should return false with unverified user', () => {
    assert.equal(index.isUserValid({verified: false}), false);
  });
  it('should return false with varified but not valid user', () => {
    assert.equal(index.isUserValid({verified: true , valid: false}), false);
  });
  it('should return true with varified and valid user', () => {
    assert.equal(index.isUserValid({verified: true, valid: true}), true);
  });
});

describe('greeter', function () {
  it('should return No greeting if no function is passed', () => {
    assert.equal(index.greeter(), 'No greeting');
  });
  it('should return Done with function passed', () => {
    const foo = sinon.stub();
    assert.equal(index.greeter(foo), 'Done');
  });
  it('should call function passed', () => {
    const foo = sinon.stub();
    assert.equal(index.greeter(foo), 'Done');
    assert.equal(foo.called, true);
    assert.equal(foo.callCount, 1);
  });
});

describe('makeRequest', function () {
  it('call request function with value', () => {
    const request = sinon.stub();
    const response = sinon.stub();
    assert.equal(index.makeRequest(request,response), null);
    assert.equal(request.called, true);
    assert.equal(request.calledWith('value'), true);
  });
  it('call request function with params', () => {
    const request = sinon.stub();
    const response = sinon.stub();
    const requestParams = {};
    assert.equal(index.makeRequest(request,response,requestParams), null);
    assert.equal(request.called, true);
    assert.equal(request.calledWith(requestParams), true);
   


  });
  it('calls response with request return value', () => {
    const request = sinon.stub();
    const response = sinon.stub();
    const returnValue = {valor: true};
    request.returns(returnValue);
    assert.equal(index.makeRequest(request,response,{}), null);
    assert.equal(request.called, true);
    assert.equal(response.firstCall.args[0], returnValue);

  });
});