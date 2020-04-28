import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDialogComponent } from './ver-dialog-user.component';

describe('VerDialogComponent', () => {
  let component: VerDialogComponent;
  let fixture: ComponentFixture<VerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
