import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    template: 
    `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Create Event Form will go here]</h3>
            <br>
            <br>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        </div>
    `
})
export class CreateEventComponent implements OnInit {
    isDirty:boolean = true
    constructor(private router: Router) { }

    ngOnInit() { }

    cancel(){
        this.router.navigate(['/events'])
    }
}