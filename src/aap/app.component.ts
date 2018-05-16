import { Component } from '@angular/core';
import { DecoratorExample } from './decorator-example'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Shows the use of a decorator
  showcourse() {
    let s = new DecoratorExample("silly")
    return s

  }


}
