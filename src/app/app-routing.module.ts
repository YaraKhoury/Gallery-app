import { ImageDetailsComponent } from './image-details/image-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:"gallery", component:GalleryComponent},
  {path:"image/:id", component:GalleryComponent},
  {path:"", redirectTo:"/gallery", pathMatch :'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
