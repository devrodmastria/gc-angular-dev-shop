import { Component } from '@angular/core';
import { DevListService } from '../../services/dev-list.service';
import { Complete, DevModel } from '../../models/dev-model';
import { RouterLink } from '@angular/router';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@Component({
  selector: 'app-dev-catalog',
  standalone: true,
  imports: [RouterLink, BookmarksComponent],
  templateUrl: './dev-catalog.component.html',
  styleUrl: './dev-catalog.component.css'
})
export class DevCatalogComponent {

  constructor(private devService: DevListService){}

  devResponse : DevModel = {} as DevModel;

  ngOnInit(){
    this.devService.getCompleteList().subscribe((response: DevModel) =>{
      this.devResponse = response;
    })
  }

}