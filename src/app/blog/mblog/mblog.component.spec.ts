import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MblogComponent } from './mblog.component';

describe('MblogComponent', () => {
  let component: MblogComponent;
  let fixture: ComponentFixture<MblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
