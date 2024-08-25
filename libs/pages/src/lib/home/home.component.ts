import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ImageCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carouselImages = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
  ];
}
