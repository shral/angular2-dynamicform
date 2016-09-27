import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>Dynamic form</h1>
    <div>
      <dynamic-form [formelements]="formelements"></dynamic-form>
    </div>
    `,
    providers:[AppService]
})
export class AppComponent {
    formelements: any[];

    constructor(service:AppService){
        this.formelements = service.getFormElements();
        console.log("formelements",this.formelements);
    }
}
