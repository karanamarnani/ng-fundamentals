import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  //template: `
  //  <h1>Ram Ram</h1>
  //  <img src="/assets/images/basic-shield.png"/>
  //`
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
