import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSliderComponent } from './bottom-slider.component';

describe('BottomSliderComponent', () => {
  let component: BottomSliderComponent;
  let fixture: ComponentFixture<BottomSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
