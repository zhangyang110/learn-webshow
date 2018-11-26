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
* The TemplateCell model module.
* @module model/TemplateCell
* @version 3.0
*/
export default class TemplateCell {
    /**
    * Constructs a new <code>TemplateCell</code>.
    * Template cell
    * @alias module:model/TemplateCell
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TemplateCell</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TemplateCell} obj Optional instance to populate.
    * @return {module:model/TemplateCell} The populated <code>TemplateCell</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateCell();

            
            
            

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('tid')) {
                obj['tid'] = ApiClient.convertToType(data['tid'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
        }
        return obj;
    }

    /**
    * cell height
    * @member {Number} height
    */
    height = undefined;
    /**
    * cell tid
    * @member {Number} tid
    */
    tid = undefined;
    /**
    * cell width
    * @member {Number} width
    */
    width = undefined;
    /**
    * cell x
    * @member {Number} x
    */
    x = undefined;
    /**
    * cell y
    * @member {Number} y
    */
    y = undefined;








}


