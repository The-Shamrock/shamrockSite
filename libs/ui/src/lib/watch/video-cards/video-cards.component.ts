import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';

export interface VideoCard {
  img: string;
  title: string;
  url: string;
}

@Component({
  selector: 'lib-video-cards',
  imports: [CommonModule, VideoCardComponent],
  templateUrl: './video-cards.component.html',
  styleUrl: './video-cards.component.scss',
})
export class VideoCardsComponent {
  videoCards: VideoCard[] = [
    {img: "./assets/watch/thumbnails/greenBurger.png", title: "Green Burger", url: "https://www.youtube.com/embed/OpbLrxw5ul0?si=GaMOvkKyxkRY1Xsl"},
    {img: "./assets/watch/thumbnails/whichEngineeringMajor.png", title: "Which Engineering Major is Best?", url: "https://www.youtube.com/embed/LTULj_ZCnMs?si=GChAeYsEVhbvKvRj"},
    {img: "./assets/watch/thumbnails/eTVEpisode3.png", title: "eTV Episode 3: E Week Andre", url: "https://www.youtube.com/embed/Ha82b4CZFo0?si=7pU-qbDmQS3K-k1K"}
  ]
}
