import { Component } from '@angular/core';
import { DevListService } from '../../services/dev-list.service';
import { Complete } from '../../models/dev-model';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.css'
})
export class BookmarksComponent {

  constructor(private devService: DevListService){}

  bookmarkList : Complete[] = this.devService.bookmarks;

}
