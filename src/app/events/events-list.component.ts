import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <!-- <event-thumbnail [event]="event1"></event-thumbnail> -->
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
        
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        //this.events = this.eventService.getEvents().subscribe(events => { this.events = events });
        this.events = this.route.snapshot.data['events'];
    }

}