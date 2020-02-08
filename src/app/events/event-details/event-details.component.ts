import { Component, OnInit } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from '../shared';

@Component({
    /**
     * we are not defining selector property since this page would be loaded directly using Router
     * And not going to be place into another component like event thumbnail
     */
    templateUrl: "./event-details.component.html",
    styles: [`
        .container { padding-left:20px; padding-reight:20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}