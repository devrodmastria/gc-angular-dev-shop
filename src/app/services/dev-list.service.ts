import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complete, DevModel } from '../models/dev-model';

@Injectable({
  providedIn: 'root'
})
export class DevListService {

  bookmarks : Complete[] = [];

  devResponse : DevModel = {} as DevModel;

  constructor(private http:HttpClient) { 
      console.log("Service INIT");
      this.getCompleteList().subscribe((response: DevModel) => {
        this.devResponse = response;
      })
  }

  getCompleteList(): Observable<DevModel>{
    return this.http.get<DevModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }

  addBookmark(dev: Complete){
    this.bookmarks.push(dev);
  }

  getDevByLastName(name: string): Complete {

    if (this.devResponse != undefined ){
      console.log(">> DEV LIST " + this.devResponse.complete.length);
      let devList : Complete[] = this.devResponse.complete;
      return devList.find(dev => dev.lastName == name) as Complete;
    }
    else {
      return {
        firstName: "Yo", lastName: "Doe", innovation: "innovation", year: 2000
      } as Complete;
    }

  }
}
