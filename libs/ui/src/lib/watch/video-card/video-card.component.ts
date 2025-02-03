import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCard } from '../video-cards/video-cards.component';
import { WatchStore } from '../store/watch.store';

@Component({
  selector: 'lib-video-card',
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  @Input() data: VideoCard = {img: "", title: "", url: ""};

    private store = inject(WatchStore);
  
    videoClicked() {
      this.store.setVideo(this.data.url);
    }
}
