import { UpperCasePipe } from '@angular/common/src/pipes/uppercase_pipe';
import { RouterLink } from '@angular/router';
import { IEvent } from './shared/event.model';
// Child component to the events.list.component

import { Component, Input } from '@angular/core';

@Component({
 selector: 'event-thumbnail',
 template:
 `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name | uppercase}}</h2>
        <div>Date: {{event?.date | date:'shortDate'}}</div>
        <!-- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">
        <div [ngClass]="{green: event?.time === '8:00 am'}" [ngSwitch]="event?.time"> 
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        <div [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event?.time">
        <div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight':event?.time === '8:00 am' ? 'bold': 'normal'}" [ngSwitch]="event?.time"> -->
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: {{event?.price | currency:'USD':true}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online Url: {{event?.onlineUrl}}
        </div>
    </div>
 `,
 styles: [
     `
     .green { color: #003300 !important; }
     .bold { font-weight: bold; }
     .thumbnail { min-height: 210px;}
     .pad-left { margin-left: 10px;}
     .well div { color: #bbb;}
     `,
 ],
})
export class EventThumbnailComponent{
    @Input() event:IEvent;
    getStartTimeClass(){
        /* First way to return an object*/
        // const isEarlyStart = this.event && this.event.time === '8:00 am'
        // return {green: isEarlyStart, bold: isEarlyStart}

         /* Second way to return an object*/
        // if(this.event && this.event.time === '8:00 am')
        //     return 'green bold'
        // return ''

         /* Third way to return an object*/
        if(this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        return [];
    }
    getStartTimeStyle():any {
        if(this.event && this.event.time === '8:00 am')
            return {'color': '#003300', 'font-weight':'bold'};
        return {};
    }
}