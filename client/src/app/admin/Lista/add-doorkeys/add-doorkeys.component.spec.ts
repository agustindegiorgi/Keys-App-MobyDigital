import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoorkeysComponent } from './add-doorkeys.component';

describe('AddDoorkeysComponent', () => {
  let component: AddDoorkeysComponent;
  let fixture: ComponentFixture<AddDoorkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoorkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoorkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
