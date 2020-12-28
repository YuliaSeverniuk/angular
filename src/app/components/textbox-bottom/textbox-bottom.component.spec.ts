import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxBottomComponent } from './textbox-bottom.component';

describe('TextboxBottomComponent', () => {
  let component: TextboxBottomComponent;
  let fixture: ComponentFixture<TextboxBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextboxBottomComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
