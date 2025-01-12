import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-puzzle-sidebar',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './puzzle-sidebar.component.html',
  styleUrl: './puzzle-sidebar.component.scss',
})
export class PuzzleSidebarComponent {}
