import { Component, OnInit } from '@angular/core';
import { EventsService } from './services/events/events.service';
import { rTEvent } from './services/events/EventInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public events: rTEvent[] = [];
  public searchString: string = '';

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.parseEvents();
  }

  // Save events in events array
  parseEvents() {
    this.eventService.getEvents().subscribe((data: rTEvent[]) => {
      this.events = data;
    });
  }
}
