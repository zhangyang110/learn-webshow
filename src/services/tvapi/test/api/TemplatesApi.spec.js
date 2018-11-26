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
    instance = new Tvapi.TemplatesApi();
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

  describe('TemplatesApi', function() {
    describe('templatesGet', function() {
      it('should call templatesGet successfully', function(done) {
        //uncomment below and update the code to test templatesGet
        //instance.templatesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesIdContentPut', function() {
      it('should call templatesIdContentPut successfully', function(done) {
        //uncomment below and update the code to test templatesIdContentPut
        //instance.templatesIdContentPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesIdGet', function() {
      it('should call templatesIdGet successfully', function(done) {
        //uncomment below and update the code to test templatesIdGet
        //instance.templatesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesIdPublishPut', function() {
      it('should call templatesIdPublishPut successfully', function(done) {
        //uncomment below and update the code to test templatesIdPublishPut
        //instance.templatesIdPublishPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesIdsGet', function() {
      it('should call templatesIdsGet successfully', function(done) {
        //uncomment below and update the code to test templatesIdsGet
        //instance.templatesIdsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesPost', function() {
      it('should call templatesPost successfully', function(done) {
        //uncomment below and update the code to test templatesPost
        //instance.templatesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
