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
import TemplateCell from './TemplateCell';





/**
* The TemplateContent model module.
* @module model/TemplateContent
* @version 3.0
*/
export default class TemplateContent {
    /**
    * Constructs a new <code>TemplateContent</code>.
    * a TemplateContent
    * @alias module:model/TemplateContent
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TemplateContent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TemplateContent} obj Optional instance to populate.
    * @return {module:model/TemplateContent} The populated <code>TemplateContent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateContent();

            
            
            

            if (data.hasOwnProperty('w')) {
                obj['w'] = ApiClient.convertToType(data['w'], 'Number');
            }
            if (data.hasOwnProperty('contentFont')) {
                obj['contentFont'] = Font.constructFromObject(data['contentFont']);
            }
            if (data.hasOwnProperty('titleFont')) {
                obj['titleFont'] = Font.constructFromObject(data['titleFont']);
            }
            if (data.hasOwnProperty('cellList')) {
                obj['cellList'] = ApiClient.convertToType(data['cellList'], [TemplateCell]);
            }
        }
        return obj;
    }

    /**
    * width
    * @member {Number} w
    */
    w = undefined;
    /**
    * Template contentFont
    * @member {module:model/Font} contentFont
    */
    contentFont = undefined;
    /**
    * Template titleFont
    * @member {module:model/Font} titleFont
    */
    titleFont = undefined;
    /**
    * Template cellList
    * @member {Array.<module:model/TemplateCell>} cellList
    */
    cellList = undefined;








}

