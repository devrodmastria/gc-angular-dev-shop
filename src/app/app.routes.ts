import { Routes } from '@angular/router';
import { DevCatalogComponent } from './components/dev-catalog/dev-catalog.component';
import { DevDetailsComponent } from './components/dev-details/dev-details.component';

export const routes: Routes = [
    {path:"", component: DevCatalogComponent},
    {path:"dev/:lastname", component: DevDetailsComponent},
    {path:"**", redirectTo:"", pathMatch: "full"}
];
