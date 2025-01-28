import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { followIcon, FollowIconComponent } from '../follow-icon/follow-icon.component';

@Component({
    selector: 'lib-follow-us',
    imports: [CommonModule, FollowIconComponent],
    templateUrl: './follow-us.component.html',
    styleUrl: './follow-us.component.scss'
})
export class FollowUsComponent {
  iconData: followIcon[] = [
    {
      imageUrl: "./assets/follow/instagramIcon.png",
      altText: "Instragram",
      name: "Instagram",
      linkUrl: "https://www.instagram.com/the_shamrock_mu/"
    },
    {
      imageUrl: "./assets/follow/tiktokIcon.png",
      altText: "TikTok",
      name: "TikTok",
      linkUrl: "https://www.tiktok.com/@the_shamrock_mu"
    },
    {
      imageUrl: "./assets/follow/youtubeIcon.png",
      altText: "YouTube",
      name: "YouTube",
      linkUrl: "https://www.youtube.com/channel/UCGM5BR3Wm76lf4pvfWX7CFw"
    }
  ]
}
