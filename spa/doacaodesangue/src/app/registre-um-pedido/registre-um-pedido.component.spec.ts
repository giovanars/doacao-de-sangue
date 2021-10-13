import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistreUmPedidoComponent } from './registre-um-pedido.component';



describe('RegistreUmPedidoComponent', () => {
  let component: RegistreUmPedidoComponent;
  let fixture: ComponentFixture<RegistreUmPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreUmPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreUmPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
