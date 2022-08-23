import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { rTEvent } from './EventInterface';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  // HTTP Request to get events
  public getEvents(): Observable<rTEvent[]> {
    return this.http.get<rTEvent[]>(environment.apiPath);
  }
}
