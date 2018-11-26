/**
 * tvapi
 * The TV Backend api v3.0
 *
 * OpenAPI spec version: 3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Tvapi);
  }
}(this, function(expect, Tvapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Tvapi.SeriesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SeriesApi', function() {
    describe('seriesGet', function() {
      it('should call seriesGet successfully', function(done) {
        //uncomment below and update the code to test seriesGet
        //instance.seriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('seriesIdGet', function() {
      it('should call seriesIdGet successfully', function(done) {
        //uncomment below and update the code to test seriesIdGet
        //instance.seriesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('seriesIdPut', function() {
      it('should call seriesIdPut successfully', function(done) {
        //uncomment below and update the code to test seriesIdPut
        //instance.seriesIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('seriesPost', function() {
      it('should call seriesPost successfully', function(done) {
        //uncomment below and update the code to test seriesPost
        //instance.seriesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
