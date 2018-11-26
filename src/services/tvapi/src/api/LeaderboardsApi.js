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
import Leaderboard from '../model/Leaderboard';

/**
* Leaderboards service.
* @module api/LeaderboardsApi
* @version 3.0
*/
export default class LeaderboardsApi {

    /**
    * Constructs a new LeaderboardsApi. 
    * @alias module:api/LeaderboardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns all leaderboards in the database.
     * Only the \&quot;admin\&quot; account can access this.
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
    leaderboardsGetWithHttpInfo(opts) {
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
        '/leaderboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns all leaderboards in the database.
     * Only the \&quot;admin\&quot; account can access this.
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
    leaderboardsGet(opts) {
      return this.leaderboardsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    leaderboardsIdGetWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaderboardsIdGet");
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
        '/leaderboards/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    leaderboardsIdGet(id) {
      return this.leaderboardsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * put leaderboards
     * put leaderboards
     * @param {Number} id 
     * @param {module:model/Leaderboard} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    leaderboardsIdPutWithHttpInfo(id, body) {
      let postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling leaderboardsIdPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling leaderboardsIdPut");
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
        '/leaderboards/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * put leaderboards
     * put leaderboards
     * @param {Number} id 
     * @param {module:model/Leaderboard} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    leaderboardsIdPut(id, body) {
      return this.leaderboardsIdPutWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * create a leaderboards
     * create a leaderboards
     * @param {module:model/Leaderboard} body The leaderboards leaderboards to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CommonResponse} and HTTP response
     */
    leaderboardsPostWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling leaderboardsPost");
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
        '/leaderboards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * create a leaderboards
     * create a leaderboards
     * @param {module:model/Leaderboard} body The leaderboards leaderboards to create
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommonResponse}
     */
    leaderboardsPost(body) {
      return this.leaderboardsPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
