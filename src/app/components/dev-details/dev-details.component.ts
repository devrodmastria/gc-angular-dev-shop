import { Component } from '@angular/core';
import { Complete, DevModel } from '../../models/dev-model';
import { ActivatedRoute, Router } from '@angular/router';
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
    private devService: DevListService,
    private router:Router){}

  ngOnInit(){
    
    this.activeRoute.paramMap.subscribe((paramMap) => {
      let lastname = paramMap.get("lastname")!;
      this.devDetail = this.devService.getDevByLastName(lastname);

      if(this.devDetail == undefined){
        this.router.navigate(["home"]);
      }
    });
  }

  saveDev(dev : Complete){
    this.devService.addBookmark(dev);
    this.router.navigate(["home"]);
  }

}
