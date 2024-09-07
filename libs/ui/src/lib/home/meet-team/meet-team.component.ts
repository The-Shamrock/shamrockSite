import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MeetTeamPersonComponent,
  meetPerson,
} from '.././meet-team-person/meet-team-person.component';

@Component({
  selector: 'lib-meet-team',
  standalone: true,
  imports: [CommonModule, MeetTeamPersonComponent],
  templateUrl: './meet-team.component.html',
  styleUrl: './meet-team.component.scss',
})
export class MeetTeamComponent {
  people: meetPerson[] = [
    {
      name: 'Sam Hirner',
      position: 'President',
      image: './assets/samProfile.jpeg',
      reverse: false,
    },
    {
      name: 'Joan Ferguson',
      position: 'Vice President',
      image: './assets/joanPhoto.png',
      reverse: true,
    },
    {
      name: 'Parker Cohen',
      position: 'Treasurer',
      image: './assets/parkerPhoto.png',
      reverse: false,
    },
    {
      name: 'Lily Hlavac',
      position: 'Secretary',
      image: './assets/lilyPhoto.jpeg',
      reverse: true,
    },
    {
      name: 'Cole Jones',
      position: 'Outreach Coordinator',
      image: './assets/colePhoto.png',
      reverse: false,
    },
  ];
}
