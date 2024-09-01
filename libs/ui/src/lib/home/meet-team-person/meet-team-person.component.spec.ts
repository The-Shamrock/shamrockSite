import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetTeamPersonComponent } from './meet-team-person.component';

describe('MeetTeamPersonComponent', () => {
  let component: MeetTeamPersonComponent;
  let fixture: ComponentFixture<MeetTeamPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetTeamPersonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeetTeamPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
