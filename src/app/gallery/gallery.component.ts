import { imageService } from './../../shared/image.service';
import { Component, OnInit, OnChanges , Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
title ="recent photos";

@Input() filterBy: string ='all'
visibleImages: any[]= [];
  constructor(private imageService: imageService) {
    this.visibleImages = this.imageService.getImages();
   }
  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit(): void {
  }

}
