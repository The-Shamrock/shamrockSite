import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadComponent } from './read.component';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
