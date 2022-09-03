import { Component, Input, OnInit } from '@angular/core';
import { Comic } from './Comic.interface';
import { ComicService } from './comic.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  @Input() id = null;

  public currentId: number;
  public displayedComic: Comic;
  public comicLoaded: boolean = false;
  public isFavorited: boolean = false;

  constructor(private comicService: ComicService) {}

  ngOnInit(): void {
    if (!this.id) {
      this.getLatestComic();
    }
  }

  // Calls the Comic service to get the latest one
  getLatestComic() {
    this.comicService.getLatestComic().subscribe((data) => {
      if (data) {
        this.displayedComic = data as Comic;
        this.comicLoaded = true;
      }
    });
  }

  saveId(id: number) {
    // send id to main component and save it there
    localStorage.setItem('favorite', String(id));
  }
}
