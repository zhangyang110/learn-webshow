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


import ApiClient from '../ApiClient';





/**
* The Release model module.
* @module model/Release
* @version 3.0
*/
export default class Release {
    /**
    * Constructs a new <code>Release</code>.
    * release
    * @alias module:model/Release
    * @class
    * @param name {String} 
    * @param versionCode {Number} 
    * @param versionName {String} 
    * @param changeLog {String} 
    * @param force {Boolean} 
    * @param url {String} 
    * @param md5 {String} 
    * @param channel {String} 
    */

    constructor(name, versionCode, versionName, changeLog, force, url, md5, channel) {
        

        
        

        this['name'] = name;this['versionCode'] = versionCode;this['versionName'] = versionName;this['changeLog'] = changeLog;this['force'] = force;this['url'] = url;this['md5'] = md5;this['channel'] = channel;

        
    }

    /**
    * Constructs a <code>Release</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Release} obj Optional instance to populate.
    * @return {module:model/Release} The populated <code>Release</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Release();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('versionCode')) {
                obj['versionCode'] = ApiClient.convertToType(data['versionCode'], 'Number');
            }
            if (data.hasOwnProperty('versionName')) {
                obj['versionName'] = ApiClient.convertToType(data['versionName'], 'String');
            }
            if (data.hasOwnProperty('changeLog')) {
                obj['changeLog'] = ApiClient.convertToType(data['changeLog'], 'String');
            }
            if (data.hasOwnProperty('force')) {
                obj['force'] = ApiClient.convertToType(data['force'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('md5')) {
                obj['md5'] = ApiClient.convertToType(data['md5'], 'String');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Number} versionCode
    */
    versionCode = undefined;
    /**
    * @member {String} versionName
    */
    versionName = undefined;
    /**
    * @member {String} changeLog
    */
    changeLog = undefined;
    /**
    * @member {Boolean} force
    */
    force = undefined;
    /**
    * @member {String} url
    */
    url = undefined;
    /**
    * @member {String} md5
    */
    md5 = undefined;
    /**
    * @member {String} channel
    */
    channel = undefined;








}


