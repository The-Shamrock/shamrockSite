import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowUsComponent } from '@shamrock/ui';

@Component({
  selector: 'lib-follow',
  standalone: true,
  imports: [CommonModule, FollowUsComponent],
  templateUrl: './follow.component.html',
  styleUrl: './follow.component.scss',
})
export class FollowComponent {}
