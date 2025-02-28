// The Component decorator from '@angular/core' allows us to define an Angular component.
import { Component } from '@angular/core';

// RouterOutlet from '@angular/router' is used to display routed components in the template.
import { RouterOutlet } from '@angular/router';

// The ListComponent is imported from the local application code.
import { ListComponent } from './list/list.component';

@Component({
  // 'selector' specifies the custom HTML tag under which this component will be used.
  selector: 'app-root',

  // 'imports' is an Angular standalone feature list, indicating this component depends on
  // RouterOutlet (for routing) and the ListComponent (our custom list component).
  imports: [RouterOutlet, ListComponent],

  // 'templateUrl' points to the external HTML file containing this component’s template.
  templateUrl: './app.component.html',

  // 'styleUrl' points to an external CSS file with styles for this component.
  styleUrl: './app.component.css'
})
export class AppComponent {

  // A public property 'title' which can be used in the component template.
  title = 'data-binding-app';

  // A counter variable, initialized to zero, incremented through a method call.
  count: number = 0;

  // A boolean flag used to show/hide certain elements or control conditional logic.
  blShow: boolean = false;

  // Increments the 'count' property by 1 each time it's invoked.
  onButtonClick() {
    this.count++;
  }

  // Toggles the boolean flag 'blShow' between true and false each time it's called.
  myMethod() {
    if (this.blShow) {
      this.blShow = false;
    } else {
      this.blShow = true;
    }
  }
}

