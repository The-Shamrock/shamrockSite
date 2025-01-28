import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent, VideoCardsComponent, VideoInfoComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-watch',
  standalone: true,
  imports: [CommonModule, VideoCardsComponent, VideoPlayerComponent, VideoInfoComponent],
  templateUrl: './watch.component.html',
  styleUrl: './watch.component.scss',
})
export class WatchComponent {}
