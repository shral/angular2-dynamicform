/**
 * Created by shefki on 9/20/16.
 */

import {Injectable} from "@angular/core";
import {FormElement} from "./form/form-element";
import {DropdownList} from "./form/dropdown-list";
import {InputText} from "./form/input-text";
import {ArrayElement} from "./form/array-element";
import {ArrayObject} from "./form/array-object";
@Injectable()
export class AppService {
    getFormElements(){
        let formelements:FormElement<any>[] = [
            new DropdownList({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    {key: 'solid',  value: 'Solid'},
                    {key: 'great',  value: 'Great'},
                    {key: 'good',   value: 'Good'},
                    {key: 'unproven', value: 'Unproven'}
                ],
                order: 3
            }),
            new InputText({
                key: 'firstName',
                label: 'First name',
                description:'Testdescriptionfirstname',
                value: 'Bombasto',
                required: true,
                order: 1
            }),
            new InputText({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            }),
            new ArrayElement({
                key: 'arrsingleelement',
                label: 'TestArray',
                type: 'text',
                value: ['testvalue1']
            }),
            new ArrayElement({
                key: 'arrsingleelement2',
                label: 'TestArray2',
                type: 'number',
                value: [1]
            }),
            new ArrayObject({
                key: 'arraytest',
                label: 'Array test',
                order:4,
                options: [{
                    element:[
                        new InputText({
                            key:'testkey',
                            label:'Test label',
                            description:"TestDescription",
                            type:'text'
                        }),
                        new InputText({
                            key:'testke2y',
                            label:'Test label2',
                            type:'text',
                            value:"testval"
                        })
                        ,
                        new ArrayElement({
                            key: 'arrsingleelement3',
                            label: 'TestArray2',
                            type: 'number',
                            value: [1]
                        })
                        ,
                        new DropdownList({
                            key: 'brave2',
                            label: 'Bravery Rating2',
                            value:'great',
                            options: [
                                {key: 'solid',  value: 'Solid'},
                                {key: 'great',  value: 'Great'},
                                {key: 'good',   value: 'Good'},
                                {key: 'unproven', value: 'Unproven'}
                            ]
                        }),
                        new ArrayObject({
                            key: 'arraytestsub',
                            label: 'Array test',
                            order:4,
                            options: [{
                                element:[
                                    new InputText({
                                        key:'testkeysub',
                                        label:'Test labelsub',
                                        type:'text'
                                    }),
                                    new InputText({
                                        key:'testke2ysub',
                                        label:'Test label2sub',
                                        type:'text',
                                        value:"testval"
                                    })
                                    ,
                                    new DropdownList({
                                        key: 'brave2',
                                        label: 'Bravery Rating2',
                                        value:'great',
                                        options: [
                                            {key: 'solid',  value: 'Solid'},
                                            {key: 'great',  value: 'Great'},
                                            {key: 'good',   value: 'Good'},
                                            {key: 'unproven', value: 'Unproven'}
                                        ]
                                    })
                                ]
                            }]
                        })
                    ]
                }
                // ,{
                //     element:[
                //         new InputText({
                //             key:'testkey',
                //             label:'Test label',
                //             type:'text'
                //         }),
                //         new InputText({
                //             key:'testke2y',
                //             label:'Test label2',
                //             type:'text'
                //         })
                //         ,
                //         new DropdownList({
                //             key: 'brave2',
                //             label: 'Bravery Rating2',
                //             options: [
                //                 {key: 'solid',  value: 'Solid'},
                //                 {key: 'great',  value: 'Great'},
                //                 {key: 'good',   value: 'Good'},
                //                 {key: 'unproven', value: 'Unproven'}
                //             ]
                //         })
                //     ]
                // }
                ]
            })
        ]
        return formelements.sort((a,b)=> a.order - b.order);
    }
}