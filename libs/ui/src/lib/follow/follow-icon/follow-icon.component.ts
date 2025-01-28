import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface followIcon {
  imageUrl: string,
  altText: string,
  name: string,
  linkUrl: string
}

@Component({
    selector: 'lib-follow-icon',
    imports: [CommonModule],
    templateUrl: './follow-icon.component.html',
    styleUrl: './follow-icon.component.scss'
})
export class FollowIconComponent {
  @Input() data: followIcon = {imageUrl: "", altText: "", name: "", linkUrl: ""};
}
