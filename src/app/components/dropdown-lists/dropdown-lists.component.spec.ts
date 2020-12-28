import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownListsComponent } from './dropdown-lists.component';

describe('DropdownListsComponent', () => {
  let component: DropdownListsComponent;
  let fixture: ComponentFixture<DropdownListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
