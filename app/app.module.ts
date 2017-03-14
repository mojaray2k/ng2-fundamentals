import { NavBarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events.app.component';
import { EventsListComponent } from './events/events.list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component';

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        EventsListComponent,
        EventThumbnailComponent
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}