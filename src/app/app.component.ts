import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public title = 'computed-property-name';

    public endName = 'computedName';

    profileForm = new FormGroup ({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        'nameInQuotes': new FormControl(),
        [this.endName]: new FormControl()

    });
}
