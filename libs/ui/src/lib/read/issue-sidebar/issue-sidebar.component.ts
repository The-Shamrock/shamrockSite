import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadStore } from '../store/read.store';

export interface Issue {
  title: string;
  imageUrl: string;
  file: string;
}

@Component({
    selector: 'lib-issue-sidebar',
    imports: [CommonModule],
    templateUrl: './issue-sidebar.component.html',
    styleUrl: './issue-sidebar.component.scss'
})
export class IssueSidebarComponent {
  @Input() data: Issue = {
    title: "",
    imageUrl: "",
    file: ""
  };

  private store = inject(ReadStore);

  issueClicked() {
    console.log("clicked " + this.data.file);
    this.store.setIssue(this.data.file);
  }
}
