import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayStore } from '../store/play.store';

export interface Puzzle {
  title: string,
  key: string,
}
export interface IssuePuzzles {
  title: string,
  puzzles: Puzzle[],
}

@Component({
  selector: 'lib-puzzle-sidebar',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './puzzle-sidebar.component.html',
  styleUrl: './puzzle-sidebar.component.scss',
})
export class PuzzleSidebarComponent {
  store = inject(PlayStore);

  data: IssuePuzzles[] = [
    {
      title: "December 2024",
      puzzles: [{title: "Crossword", key:"crossword-dec-2024"}]
    },
    {
      title: "October 2024",
      puzzles: [{title: "Crossword", key:"crossword-oct-2024"}, {title: "Puzzgrid", key:"puzzgrid-oct-2024"}]
    },
    {
      title: "May 2024",
      puzzles: [{title: "Crossword", key:"crossword-may-2024"}, {title: "Puzzgrid", key:"puzzgrid-may-2024"}]
    },
    {
      title: "March 2024",
      puzzles: [{title: "Crossword", key:"crossword-mar-2024"}, {title: "Puzzgrid", key:"puzzgrid-mar-2024"}]
    },
    {
      title: "December 2023",
      puzzles: [{title: "Crossword", key:"crossword-dec-2023"}, {title: "Puzzgrid", key:"puzzgrid-dec-2023"}]
    },
    {
      title: "October 2023",
      puzzles: [{title: "Crossword", key:"crossword-oct-2023"}, {title: "Puzzgrid", key:"puzzgrid-oct-2023"}]
    },
  ]

  

  selectPuzzle(puzzle: Puzzle) {
    this.store.setPuzzle(puzzle.key);
    console.log(this.store.selectedPuzzle());
  }
}
