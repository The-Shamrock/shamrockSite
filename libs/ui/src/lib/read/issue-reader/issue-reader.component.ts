import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadStore } from '../store/read.store';

@Component({
  selector: 'lib-issue-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-reader.component.html',
  styleUrl: './issue-reader.component.scss',
})
export class IssueReaderComponent {
  private store = inject(ReadStore);
  selectedIssue = '';
  issueFile = '';

  constructor() {
    this.selectedIssue = this.store.selectedIssue();

    switch(this.selectedIssue) {
      case 'latest':
        this.issueFile = './assets/issues/oct2024.pdf';
        break;
      case 'oct2024':
        this.issueFile = './assets/issues/oct2024.pdf';
        break;
      case 'may2024':
        this.issueFile = './assets/issues/may2024.pdf';
        break;
      case 'mar2024':
        this.issueFile = './assets/issues/mar2024.pdf';
        break;
    }
  }

}
