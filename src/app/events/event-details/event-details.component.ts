import { Component, OnInit } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from "@angular/router";
import { IEvent, ISession } from '../shared';

@Component({
    /**
     * we are not defining selector property since this page would be loaded directly using Router
     * And not going to be place into another component like event thumbnail
     */
    templateUrl: "./event-details.component.html",
    styles: [`
        .container { padding-left:20px; padding-reight:20px; }
        .event-image { height: 100px; }
        a { cursor: pointer; }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'name';

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
        this.route.params.forEach((params: Params) => {
            this.resetComponentState(params);
        })
    }
    resetComponentState(params) {
        this.event = this.eventService.getEvent(+params['id']);
        this.addMode = false;
        this.filterBy = 'all';
        this.sortBy = 'name';
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const currentId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = currentId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
    cancelAddSession() {
        this.addMode = false;
    }
}