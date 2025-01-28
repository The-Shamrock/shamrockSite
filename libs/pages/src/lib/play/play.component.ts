import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleSidebarComponent, PuzzleDisplayComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-play',
  standalone: true,
  imports: [CommonModule, PuzzleDisplayComponent, PuzzleSidebarComponent],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
})
export class PlayComponent {}
