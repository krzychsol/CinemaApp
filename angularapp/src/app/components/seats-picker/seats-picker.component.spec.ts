import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatsPickerComponent } from './seats-picker.component';

describe('SeatsPickerComponent', () => {
  let component: SeatsPickerComponent;
  let fixture: ComponentFixture<SeatsPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatsPickerComponent]
    });
    fixture = TestBed.createComponent(SeatsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
