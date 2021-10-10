import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisDeDoacaoComponent } from './locais-de-doacao.component';

describe('LocaisDeDoacaoComponent', () => {
  let component: LocaisDeDoacaoComponent;
  let fixture: ComponentFixture<LocaisDeDoacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisDeDoacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisDeDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
