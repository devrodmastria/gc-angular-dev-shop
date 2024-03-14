import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complete, DevModel } from '../models/dev-model';

@Injectable({
  providedIn: 'root'
})
export class DevListService {

  bookmarks : Complete[] = [];

  constructor(private http:HttpClient) { }

  getCompleteList(): Observable<DevModel>{
    return this.http.get<DevModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }

  addBookmark(dev: Complete){
    this.bookmarks.push(dev);
  }
}
