import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSuccessComponent } from './new-product-success.component';

describe('NewProductSuccessComponent', () => {
  let component: NewProductSuccessComponent;
  let fixture: ComponentFixture<NewProductSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
