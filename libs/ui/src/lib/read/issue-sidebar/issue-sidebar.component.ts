import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-issue-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue-sidebar.component.html',
  styleUrl: './issue-sidebar.component.scss',
})
export class IssueSidebarComponent {}
