import { Component, Input, OnInit } from '@angular/core';
import { Comic } from './Comic.interface';
import { ComicService } from './comic.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  @Input() id: Comic;
  @Output() newFavoriteComic = new EventEmitter<number>();

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
    this.newFavoriteComic.emit(id);
  }
}
