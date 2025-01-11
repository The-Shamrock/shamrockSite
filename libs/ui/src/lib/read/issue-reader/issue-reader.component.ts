import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadStore } from '../store/read.store';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lib-issue-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-reader.component.html',
  styleUrl: './issue-reader.component.scss',
})
export class IssueReaderComponent {
  store = inject(ReadStore);
  selectedIssue = './assets/issues/oct2024.pdf';

  constructor(private sanitizer: DomSanitizer) {
    this.selectedIssue = this.store.selectedIssue();
    console.log("Reader has issue " + this.selectedIssue);
  }

  getSanitizedUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
