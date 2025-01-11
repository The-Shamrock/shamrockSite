import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesSidebarComponent, IssueReaderComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-read',
  standalone: true,
  imports: [CommonModule, IssuesSidebarComponent, IssueReaderComponent],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss',
})
export class ReadComponent {}
