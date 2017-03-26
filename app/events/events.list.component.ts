import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';
// Child component to events.app.component

import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventsListComponent implements OnInit{
  events:IEvent[];
    constructor(
        private eventService: EventService,
        private route:ActivatedRoute,
    ){
        
    }

    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.events = this.route.snapshot.data['events'];
    }
}