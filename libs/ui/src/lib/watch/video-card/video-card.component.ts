import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCard } from '../video-cards/video-cards.component';

@Component({
  selector: 'lib-video-card',
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input() data: VideoCard = {img: "", title: ""};
}
