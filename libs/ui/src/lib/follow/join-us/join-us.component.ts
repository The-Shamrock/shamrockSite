import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowIconComponent } from '../follow-icon/follow-icon.component';
import { followIcon } from '../follow-icon/follow-icon.component';

@Component({
  selector: 'lib-join-us',
  standalone: true,
  imports: [CommonModule, FollowIconComponent],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss',
})
export class JoinUsComponent {
  iconData: followIcon[] = [
    {
      imageUrl: "./assets/follow/discordIcon.png",
      altText: "Discord",
      name: "Discord",
      linkUrl: "https://discord.com/invite/caHv9bne6e"
    },
    {
      imageUrl: "./assets/follow/muEngageIcon.jpg",
      altText: "MU Engage",
      name: "MU Engage",
      linkUrl: "https://engage.missouri.edu/TheShamrock/club_signup"
    }
  ]
}
