import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { followIcon, FollowIconComponent } from '../follow-icon/follow-icon.component';

@Component({
  selector: 'lib-follow-us',
  standalone: true,
  imports: [CommonModule, FollowIconComponent],
  templateUrl: './follow-us.component.html',
  styleUrl: './follow-us.component.scss',
})
export class FollowUsComponent {
  iconData: followIcon[] = [
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      altText: "Instragram",
      name: "Instagram",
      linkUrl: "https://www.instagram.com/the_shamrock_mu/"
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      altText: "Instragram",
      name: "Instagram",
      linkUrl: "https://www.instagram.com/the_shamrock_mu/"
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
      altText: "Instragram",
      name: "Instagram",
      linkUrl: "https://www.instagram.com/the_shamrock_mu/"
    }
  ]
}
