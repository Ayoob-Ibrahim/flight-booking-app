import { Component, enableProdMode } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight-app';
  constructor() {
    // enableProdMode();
    console.log(environment.apiUrl); // Logs false for development environment
  }


}
