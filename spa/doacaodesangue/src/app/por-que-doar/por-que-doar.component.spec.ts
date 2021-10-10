import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorQueDoarComponent } from './por-que-doar.component';

describe('PorQueDoarComponent', () => {
  let component: PorQueDoarComponent;
  let fixture: ComponentFixture<PorQueDoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorQueDoarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorQueDoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
