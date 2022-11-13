import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaboutComponent } from './mabout.component';

describe('MaboutComponent', () => {
  let component: MaboutComponent;
  let fixture: ComponentFixture<MaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
