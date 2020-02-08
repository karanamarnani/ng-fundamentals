import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>Price: \${{event.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event.location.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                <span>Online URL: {{event.onlineUrl}}</span>
            </div>
        </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
    
    getStartTimeClass() {
        /**
        One way of returning class names
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
        
        Another way of returning class names
        if(this.event && this.event.time === '8:00 am') {
            return 'green bold';
        }
        return '';
        */
        if(this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }
        return [];
    }

    getStartTimeStyle() {
        if(this.event && this.event.time === '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'}
        }
        return {}
    }
}