import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsSoonComponent } from './savings-soon.component';

describe('SavingsSoonComponent', () => {
  let component: SavingsSoonComponent;
  let fixture: ComponentFixture<SavingsSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
