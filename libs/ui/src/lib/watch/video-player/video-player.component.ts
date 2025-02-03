import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchStore } from '../store/watch.store';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lib-video-player',
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
  store = inject(WatchStore);
  selectedVideo = 'https://www.youtube.com/embed/OpbLrxw5ul0?si=GaMOvkKyxkRY1Xsl';

  constructor(private sanitizer: DomSanitizer) {
    this.selectedVideo = this.store.selectedVideo();
  }

  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}
