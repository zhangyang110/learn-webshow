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
import Font from './Font';
import PageCell from './PageCell';





/**
* The PageSection model module.
* @module model/PageSection
* @version 3.0
*/
export default class PageSection {
    /**
    * Constructs a new <code>PageSection</code>.
    * page section
    * @alias module:model/PageSection
    * @class
    * @param tid {Number} tid
    * @param contentList {Array.<module:model/PageCell>} cell list
    */

    constructor(tid, contentList) {
        

        
        

        this['tid'] = tid;this['contentList'] = contentList;

        
    }

    /**
    * Constructs a <code>PageSection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PageSection} obj Optional instance to populate.
    * @return {module:model/PageSection} The populated <code>PageSection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageSection();

            
            
            

            if (data.hasOwnProperty('disable')) {
                obj['disable'] = ApiClient.convertToType(data['disable'], 'Boolean');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('tid')) {
                obj['tid'] = ApiClient.convertToType(data['tid'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('contentFont')) {
                obj['contentFont'] = Font.constructFromObject(data['contentFont']);
            }
            if (data.hasOwnProperty('titleFont')) {
                obj['titleFont'] = Font.constructFromObject(data['titleFont']);
            }
            if (data.hasOwnProperty('contentList')) {
                obj['contentList'] = ApiClient.convertToType(data['contentList'], [PageCell]);
            }
        }
        return obj;
    }

    /**
    * disable
    * @member {Boolean} disable
    */
    disable = undefined;
    /**
    * offset
    * @member {Number} offset
    */
    offset = undefined;
    /**
    * tid
    * @member {Number} tid
    */
    tid = undefined;
    /**
    * title
    * @member {String} title
    */
    title = undefined;
    /**
    * contentFont
    * @member {module:model/Font} contentFont
    */
    contentFont = undefined;
    /**
    * titleFont
    * @member {module:model/Font} titleFont
    */
    titleFont = undefined;
    /**
    * cell list
    * @member {Array.<module:model/PageCell>} contentList
    */
    contentList = undefined;








}

