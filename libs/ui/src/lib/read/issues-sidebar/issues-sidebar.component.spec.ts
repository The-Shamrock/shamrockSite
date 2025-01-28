import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssuesSidebarComponent } from './issues-sidebar.component';

describe('IssuesSidebarComponent', () => {
  let component: IssuesSidebarComponent;
  let fixture: ComponentFixture<IssuesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuesSidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
