import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '@shamrock/ui';
import { imageData } from '@shamrock/ui';
import { AboutSectionComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent, AboutSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carouselData: imageData[] = [
    {
      image: 'https://via.placeholder.com/800x400',
      altText: 'image',
      heading: 'Heading 1',
      description: 'Description 1',
    },
    {
      image: 'https://via.placeholder.com/800x400',
      altText: 'image',
      heading: 'Heading 2',
      description: 'Description 2',
    },
    {
      image: 'https://via.placeholder.com/800x400',
      altText: 'image',
      heading: 'Heading 3',
      description: 'Description 3',
    },
  ];
}
