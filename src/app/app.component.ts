import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComicService } from './components/comic/comic.service';
import { View } from './View.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';
  public viewEnum: typeof View = View;

  public comicById: number;
  public panelOpenState: boolean = false;
  public currentView: View = this.viewEnum.LATEST;
  private favorites: number[] = [];

  toggleTheme = new FormControl(false);

  constructor(private comicService: ComicService) {}
  ngOnInit(): void {
    if (!localStorage.getItem('dark-mode')) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        console.log(!!localStorage.getItem('dark-mode'));
        this.toggleTheme.setValue(true);
      }
    } else {
      this.toggleTheme.setValue(localStorage.getItem('dark-mode') === 'true');
    }

    this.toggleTheme.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? 'darkMode' : '';
      localStorage.setItem('dark-mode', String(darkMode));
    });
  }

  // Only allow numbers when getting comic by ID
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getComicByID(comicId: string) {
    this.comicById = parseInt(comicId);
    this.comicService.getComicById(parseInt(comicId));
  }

  changeView() {
    this.currentView === View.LATEST
      ? (this.currentView = View.FAVORITES)
      : (this.currentView = View.LATEST);
  }
}
