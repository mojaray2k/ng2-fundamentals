// Parent Component

import { Component, OnInit } from '@angular/core';
import { selector } from 'rxjs/operator/multicast';
import { AuthService } from './user/auth.service';

@Component({
    selector: 'events-app',
    template:
    `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
})
export class EventsAppComponent implements OnInit{
    constructor(private auth: AuthService){}

    ngOnInit(){
        this.auth.checkAuthenticationStatus();
    }
}