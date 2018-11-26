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
    instance = new Tvapi.VideosApi();
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

  describe('VideosApi', function() {
    describe('videosGet', function() {
      it('should call videosGet successfully', function(done) {
        //uncomment below and update the code to test videosGet
        //instance.videosGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('videosIdGet', function() {
      it('should call videosIdGet successfully', function(done) {
        //uncomment below and update the code to test videosIdGet
        //instance.videosIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('videosIdPut', function() {
      it('should call videosIdPut successfully', function(done) {
        //uncomment below and update the code to test videosIdPut
        //instance.videosIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('videosPost', function() {
      it('should call videosPost successfully', function(done) {
        //uncomment below and update the code to test videosPost
        //instance.videosPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('videosUpdateShowNamesPost', function() {
      it('should call videosUpdateShowNamesPost successfully', function(done) {
        //uncomment below and update the code to test videosUpdateShowNamesPost
        //instance.videosUpdateShowNamesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('videosVideoNamePost', function() {
      it('should call videosVideoNamePost successfully', function(done) {
        //uncomment below and update the code to test videosVideoNamePost
        //instance.videosVideoNamePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
