import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowIconComponent } from './follow-icon.component';

describe('FollowIconComponent', () => {
  let component: FollowIconComponent;
  let fixture: ComponentFixture<FollowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
