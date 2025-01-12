import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

export interface IssuePuzzles {
  title: string,
  puzzles: string[],
}

@Component({
  selector: 'lib-puzzle-sidebar',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './puzzle-sidebar.component.html',
  styleUrl: './puzzle-sidebar.component.scss',
})
export class PuzzleSidebarComponent {
  data: IssuePuzzles[] = [
    {
      title: "December 2024",
      puzzles: ["Crossword"]
    },
    {
      title: "October 2024",
      puzzles: ["Crossword", "Puzzgrid"]
    },
    {
      title: "May 2024",
      puzzles: ["Crossword", "Puzzgrid"]
    }
  ]
}
