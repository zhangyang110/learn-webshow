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
* The Video model module.
* @module model/Video
* @version 3.0
*/
export default class Video {
    /**
    * Constructs a new <code>Video</code>.
    * a video
    * @alias module:model/Video
    * @class
    * @param name {String} 
    * @param showName {String} 
    * @param adTag {Number} 
    * @param duration {Number} 
    * @param frameRatio {Number} 
    * @param size {Number} 
    * @param ext {String} 
    */

    constructor(name, showName, adTag, duration, frameRatio, size, ext) {
        

        
        

        this['name'] = name;this['show_name'] = showName;this['ad_tag'] = adTag;this['duration'] = duration;this['frame_ratio'] = frameRatio;this['size'] = size;this['ext'] = ext;

        
    }

    /**
    * Constructs a <code>Video</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Video} obj Optional instance to populate.
    * @return {module:model/Video} The populated <code>Video</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Video();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('show_name')) {
                obj['show_name'] = ApiClient.convertToType(data['show_name'], 'String');
            }
            if (data.hasOwnProperty('ad_tag')) {
                obj['ad_tag'] = ApiClient.convertToType(data['ad_tag'], 'Number');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('frame_ratio')) {
                obj['frame_ratio'] = ApiClient.convertToType(data['frame_ratio'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('ext')) {
                obj['ext'] = ApiClient.convertToType(data['ext'], 'String');
            }
        }
        return obj;
    }

    /**
    * id
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} show_name
    */
    show_name = undefined;
    /**
    * @member {Number} ad_tag
    */
    ad_tag = undefined;
    /**
    * @member {Number} duration
    */
    duration = undefined;
    /**
    * @member {Number} frame_ratio
    */
    frame_ratio = undefined;
    /**
    * @member {Number} size
    */
    size = undefined;
    /**
    * @member {String} ext
    */
    ext = undefined;








}


