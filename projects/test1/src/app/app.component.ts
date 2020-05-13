import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1';


  /**
   *  Redirect to google
   */
  redig(){
    window.open('http://google.com', '_blank');
  }

}
