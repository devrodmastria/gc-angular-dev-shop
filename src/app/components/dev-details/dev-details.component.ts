import { Component } from '@angular/core';
import { Complete } from '../../models/dev-model';
import { ActivatedRoute, Router } from '@angular/router';
import { DevCatalogComponent } from '../dev-catalog/dev-catalog.component';
import { DevListService } from '../../services/dev-list.service';

@Component({
  selector: 'app-dev-details',
  standalone: true,
  imports: [],
  templateUrl: './dev-details.component.html',
  styleUrl: './dev-details.component.css'
})
export class DevDetailsComponent {
  devDetail : Complete = {} as Complete;

  constructor(private activeRoute : ActivatedRoute,  
    private devCatalog: DevCatalogComponent,
    private devService: DevListService,
    private router:Router){}

  ngOnInit(){

    console.log("details HERE");
    
    this.activeRoute.paramMap.subscribe((paramMap) => {
      let name = paramMap.get("lastname")!;
      this.devDetail = this.devCatalog.getDevByLastName(name);
      console.log("Details " + this.devDetail.innovation);

      if(this.devDetail == undefined){
        this.router.navigate(["home"]);
      }
    });
  }

  saveDev(dev : Complete){
    this.devService.addBookmark(dev);
  }

}
