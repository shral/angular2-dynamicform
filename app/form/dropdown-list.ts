import {FormElement} from "./form-element";
/**
 * Created by shefki on 9/20/16.
 */

export class DropdownList extends FormElement<string>{
    controlType = 'dropdown';
    options:{key:string, value:string}[] = [];

    constructor(options:{} = {}){
        super(options);
        this.options = options['options'] || [];
    }
}