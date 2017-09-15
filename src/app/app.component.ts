import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  cv: string;

  inputValueChange1(value: string) {
    console.log(event.target);
    console.log(value);
    this.cv = value;
  }
}
