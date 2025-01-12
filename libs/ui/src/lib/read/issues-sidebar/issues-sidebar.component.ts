import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueSidebarComponent } from '../issue-sidebar/issue-sidebar.component';

@Component({
    selector: 'lib-issues-sidebar',
    imports: [CommonModule, IssueSidebarComponent],
    templateUrl: './issues-sidebar.component.html',
    styleUrl: './issues-sidebar.component.scss'
})

export class IssuesSidebarComponent {
  issues = [
    {
      title: 'October 2024',
      imageUrl: './assets/covers/oct2024.png',
      file: './assets/issues/oct2024.pdf'
    },
    {
      title: 'May 2024',
      imageUrl: './assets/covers/may2024.png',
      file: './assets/issues/may2024.pdf'
    },
    {
      title: 'March 2024',
      imageUrl: './assets/covers/mar2024.png',
      file: './assets/issues/mar2024.pdf'
    }
  ];
}
