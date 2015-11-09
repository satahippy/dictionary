var Dictionary = require('../src/Dictionary');
var assert = require('assert');

describe('Dictionary', function () {
	it('should return text', function () {
		var dic = new Dictionary({
			test: 'Test Translation'
		});
		assert.equal(dic.get('test'), 'Test Translation');
	});

	it('should merge proper way', function () {
		var dic = new Dictionary({
			test: 'Test Translation',
			test2: 'Test Translation 2'
		});
		dic.merge({test: 'Another Test Translation'});
		
		assert.equal(dic.get('test'), 'Another Test Translation');
		assert.equal(dic.get('test2'), 'Test Translation 2');
	});

	it('should create with empty dictionary', function () {
		var dic = new Dictionary();
		dic.merge({test: 'Test Translation'});
		assert.equal(dic.get('test'), 'Test Translation');
	});

	it('should return undefined if word is not found', function () {
		var dic = new Dictionary();
		assert.equal(dic.get('test'), undefined);
	});
});