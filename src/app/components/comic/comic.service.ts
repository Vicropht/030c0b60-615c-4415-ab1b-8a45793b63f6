import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Comic } from './Comic.interface';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private http: HttpClient) {}

  // HTTP Request to get latest comic
  public getLatestComic(): Observable<Object> {
    return this.http.jsonp(
      `https://dynamic.xkcd.com/api-0/jsonp/comic`,
      'callback'
    );
  }

  // HTTP Request to get comic by id
  public getComicById(id: number): Observable<Object> {
    return this.http.jsonp(
      `https://dynamic.xkcd.com/${id}/api-0/jsonp/comic`,
      'callback'
    );
  }
}
