import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUsComponent, EmailListComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-follow',
  standalone: true,
  imports: [CommonModule, FollowUsComponent, EmailListComponent],
  templateUrl: './follow.component.html',
  styleUrl: './follow.component.scss',
})
export class FollowComponent {}
