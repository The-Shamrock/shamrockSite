import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadStore } from '../store/read.store';

export interface Issue {
  title: string;
  imageUrl: string;
  id: string;
}

@Component({
  selector: 'lib-issue-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-sidebar.component.html',
  styleUrl: './issue-sidebar.component.scss',
})
export class IssueSidebarComponent {
  @Input() data: Issue = {
    title: "",
    imageUrl: "",
    id: ""
  };

  private store = inject(ReadStore);

  issueClicked() {
    this.store.setIssue(this.data.id);
  }
}
