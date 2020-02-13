import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from "./events/index";
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

let toastr:Toastr = window['toastr'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty){
    return window.confirm('You have ot saved this event, do you really want to continue?');
  }
  return true;
}