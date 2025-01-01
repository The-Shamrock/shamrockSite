import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUsComponent, EmailListComponent, JoinUsComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-follow',
  standalone: true,
  imports: [CommonModule, FollowUsComponent, EmailListComponent, JoinUsComponent],
  templateUrl: './follow.component.html',
  styleUrl: './follow.component.scss',
})
export class FollowComponent {}
