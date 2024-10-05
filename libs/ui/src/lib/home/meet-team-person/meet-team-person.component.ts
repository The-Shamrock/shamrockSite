import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface meetPerson {
  name: string;
  position: string;
  image: string;
  reverse: boolean;
}

@Component({
  selector: 'lib-meet-team-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet-team-person.component.html',
  styleUrl: './meet-team-person.component.scss',
})
export class MeetTeamPersonComponent {
  @Input() person: meetPerson = {
    name: '',
    position: '',
    image: '',
    reverse: false,
  };
}
