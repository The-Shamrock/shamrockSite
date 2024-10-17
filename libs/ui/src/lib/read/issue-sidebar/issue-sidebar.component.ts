import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Issue {
  title: string;
  imageUrl: string;
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
    imageUrl: ""
  };
}
