import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayStore } from '../store/play.store';

@Component({
  selector: 'lib-puzzle-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puzzle-display.component.html',
  styleUrl: './puzzle-display.component.scss',
})
export class PuzzleDisplayComponent {

  store = inject(PlayStore);
  selectedPuzzle = 'crossword-dec-2024';

  constructor() {
    this.selectedPuzzle = this.store.selectedPuzzle();
  }
}
