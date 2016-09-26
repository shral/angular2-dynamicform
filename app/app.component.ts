import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular App</h1>
    <div>
      <h2>Job Application for Heroes</h2>
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
