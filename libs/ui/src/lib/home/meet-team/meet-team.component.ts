import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetTeamPersonComponent } from '.././meet-team-person/meet-team-person.component';

@Component({
  selector: 'lib-meet-team',
  standalone: true,
  imports: [CommonModule, MeetTeamPersonComponent],
  templateUrl: './meet-team.component.html',
  styleUrl: './meet-team.component.scss',
})
export class MeetTeamComponent {}
