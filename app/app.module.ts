import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator
} from './events/index'
import {
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    JQ_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent
} from  './common/index'
import { EventsAppComponent } from './events.app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;
declare let jQuery : Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe,
        UpvoteComponent,
        LocationValidator
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr},
        { provide: JQ_TOKEN, useValue: jQuery},
        {
            provide:'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver,
        EventResolver,
        AuthService,
        VoterService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
      return window.confirm("You have not saved this event, do you really want to cancel?")
    return true
}