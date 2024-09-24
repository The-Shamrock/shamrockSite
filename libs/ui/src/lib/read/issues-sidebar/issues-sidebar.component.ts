import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-issues-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issues-sidebar.component.html',
  styleUrl: './issues-sidebar.component.scss',
})
export class IssuesSidebarComponent {}
