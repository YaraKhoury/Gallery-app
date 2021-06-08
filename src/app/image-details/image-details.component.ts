import { imageService } from './../../shared/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  constructor(private imageService: imageService) { }

  ngOnInit(): void {
  }

}
