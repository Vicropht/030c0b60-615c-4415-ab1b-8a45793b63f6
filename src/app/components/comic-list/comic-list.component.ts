import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss'],
})
export class ComicListComponent implements OnInit {
  public favoritesList: any;

  constructor() {}

  ngOnInit(): void {
    // Retrieve favorites list
    this.favoritesList = JSON.parse(localStorage['favorites']);
  }
}
