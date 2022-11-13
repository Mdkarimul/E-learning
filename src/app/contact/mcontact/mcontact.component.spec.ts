import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McontactComponent } from './mcontact.component';

describe('McontactComponent', () => {
  let component: McontactComponent;
  let fixture: ComponentFixture<McontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
