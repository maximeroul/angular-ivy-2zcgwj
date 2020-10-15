import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Coucouc';


  constructor() {
    setTimeout(() => {
      this.title = 'REZREZREZR';
    }, 1000);
  }


  public changeTitle() {
    this.title = 'CYTECH';
  }


}
