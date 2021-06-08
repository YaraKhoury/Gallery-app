import { RouterModule, Routes } from '@angular/router';
import { ImageFilterPipe } from './../shared/filter.pipe';
import { imageService } from './../shared/image.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
//import { ImagesComponent } from './images/images.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailsComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [imageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
