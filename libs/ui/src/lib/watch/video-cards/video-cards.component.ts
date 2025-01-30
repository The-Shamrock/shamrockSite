import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';

export interface VideoCard {
  img: string;
  title: string;
}

@Component({
  selector: 'lib-video-cards',
  imports: [CommonModule, VideoCardComponent],
  templateUrl: './video-cards.component.html',
  styleUrl: './video-cards.component.scss',
})
export class VideoCardsComponent {
  videoCards: VideoCard[] = [
    {img: "./assets/watch/thumbnails/greenBurger.png", title: "Green Burger"},
    {img: "./assets/watch/thumbnails/greenBurger.png", title: "Green Burger"},
    {img: "./assets/watch/thumbnails/greenBurger.png", title: "Green Burger"}
  ]
}
