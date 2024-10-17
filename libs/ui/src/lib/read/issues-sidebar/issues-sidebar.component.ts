import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueSidebarComponent } from '../issue-sidebar/issue-sidebar.component';

@Component({
  selector: 'lib-issues-sidebar',
  standalone: true,
  imports: [CommonModule, IssueSidebarComponent],
  templateUrl: './issues-sidebar.component.html',
  styleUrl: './issues-sidebar.component.scss',
})

export class IssuesSidebarComponent {
  issues = [
    {
      title: 'Issue 1',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Issue 2',
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      title: 'Issue 3',
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];
}
