import { Injectable } from "@angular/core";
import { Resolve, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { EventService } from '../shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getEvents().pipe(map(events => events));
    }
}