import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-issue-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-reader.component.html',
  styleUrl: './issue-reader.component.scss',
})
export class IssueReaderComponent {}
