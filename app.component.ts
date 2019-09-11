import { Component, Input } from '@angular/core';
import { ConfigService } from './config.service.ts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {
  constructor (public configService : ConfigService) {


  }
  setTheme(value : string){
    this.configService.setTheme = value;
  }
}

/*propertybinding section of app.html 
export class AppComponent {
form: FormGroup;
constructor(fb:FormBuilder) {
this.form = fb.group({
bob : ['',Validators.required]
});
}
