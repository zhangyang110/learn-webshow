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


import ApiClient from "../ApiClient";
import CommonResponse from '../model/CommonResponse';
import Error from '../model/Error';
import Page from '../model/Page';

/**
* Pages service.
* @module api/PagesApi
* @version 3.0
*/
export default class PagesApi {

    /**
    * Constructs a new PagesApi. 
    * @alias module:api/PagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns all page in the database.
     * Get all the pages   
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Filter. e.g. col1:v1,col2:v2 ...
     * @param {String} opts.fields Fields returned. e.g. col1,col2 ...
     * @param {String} opts.sortby Sorted-by fields. e.g. col1,col2 ...
     * @param {String} opts.order Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
     * @param {Number} opts.limit Limit the size of result set. Must be an integer
     * @param {Number} opts.offset Start position of result set. Must be an integer
     * @param {String} opts.model 获取数据匹配规则 1.默认：匹配字段中包含且不区分大小写  2.accurate：精确匹配，字段完全相等  e.g. accurate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    pagesGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'query': opts['query'],
        'fields': opts['fields'],
        'sortby': opts['sortby'],
        'order': opts['order'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'model': opts['model']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CommonResponse;

      return this.apiClient.callApi(
        '/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns all page in the database.
     * Get all the pages   
     * @param {Object} opts Optional parameters
     * @param {String} opts.query Filter. e.g. col1:v1,col2:v2 ...
     * @param {String} opts.fields Fields returned. e.g. col1,col2 ...
     * @param {String} opts.sortby Sorted-by fields. e.g. col1,col2 ...
     * @param {String} opts.order Order corresponding to each sortby field, if single value, apply to all sortby fields. e.g. desc,asc ...
     * @param {Number} opts.limit Limit the size of result set. Must be an integer
     * @param {Number} opts.offset Start position of result set. Must be an integer
     * @param {String} opts.model 获取数据匹配规则 1.默认：匹配字段中包含且不区分大小写  2.accurate：精确匹配，字段完全相等  e.g. accurate
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    pagesGet(opts) {
      return this.pagesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * save the content to the draft version of the specific page
     * save the content to the draft version of the specific page
     * @param {Number} id 
     * @param {module:model/Page} body The page to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    pagesIdContentPutWithHttpInfo(id, body) {
      let postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pagesIdContentPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pagesIdContentPut");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CommonResponse;

      return this.apiClient.callApi(
        '/pages/{id}/content', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * save the content to the draft version of the specific page
     * save the content to the draft version of the specific page
     * @param {Number} id 
     * @param {module:model/Page} body The page to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    pagesIdContentPut(id, body) {
      return this.pagesIdContentPutWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * return the draft version (version 0 ) of the specific page
     * This will return the page with the specific name, i.e. version:0
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    pagesIdGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling pagesIdGet");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CommonResponse;

      return this.apiClient.callApi(
        '/pages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * return the draft version (version 0 ) of the specific page
     * This will return the page with the specific name, i.e. version:0
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    pagesIdGet(id) {
      return this.pagesIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create a page with the given name
     * create a page with the given name
     * @param {module:model/Page} body The page page to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    pagesPostWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling pagesPost");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CommonResponse;

      return this.apiClient.callApi(
        '/pages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * create a page with the given name
     * create a page with the given name
     * @param {module:model/Page} body The page page to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    pagesPost(body) {
      return this.pagesPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
