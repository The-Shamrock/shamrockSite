import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface imageData {
  image: string;
  altText: string;
  heading: string;
  description: string;
  darkText?: boolean;
}
@Component({
    selector: 'lib-image-carousel',
    imports: [CommonModule, NgbCarouselModule],
    templateUrl: './image-carousel.component.html',
    styleUrl: './image-carousel.component.scss'
})
export class ImageCarouselComponent {
  @Input() data: imageData[] = [];
}
