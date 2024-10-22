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
      title: 'October 2024',
      imageUrl: './assets/covers/oct2024.png',
      id: 'oct2024'
    },
    {
      title: 'May 2024',
      imageUrl: './assets/covers/may2024.png',
      id: 'may2024'
    },
    {
      title: 'March 2024',
      imageUrl: './assets/covers/mar2024.png',
      id: 'mar2024'
    }
  ];
}
