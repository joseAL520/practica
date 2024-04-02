import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaceDetectionComponent } from './chace-detection.component';

describe('ChaceDetectionComponent', () => {
  let component: ChaceDetectionComponent;
  let fixture: ComponentFixture<ChaceDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaceDetectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaceDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
